import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequest, RegisterRequest } from '../../services/auth.service';
import { PaymentService, SubscriptionPlan } from '../../services/payment.service';
import { Observable, Subscription, firstValueFrom } from 'rxjs';
import { Stripe, StripeElements } from '@stripe/stripe-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  // Payment element will be accessed by ID
  
  // Login form
  email = '';
  password = '';
  
  // Registration form
  firstName = '';
  lastName = '';
  confirmPassword = '';
  selectedPlan = 'pro'; // Default to pro plan (UI property)
  
  // Plan selection
  subscriptionPlans: SubscriptionPlan[] = [];
  
  // Payment
  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  // We will render a Stripe Card Element via PaymentService for paid plans
  paymentError: string | null = null;
  paymentMethodId: string | null = null;
  
  isLoading = false;
  showSignup = false;
  error: string | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSubscriptionPlans();
    this.initializeStripe();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private loadSubscriptionPlans(): void {
    const sub = this.paymentService.getSubscriptionPlans().subscribe({
      next: (plans) => {
        this.subscriptionPlans = plans;
        // Set default selection to basic plan
        this.selectedPlan = 'basic';
      },
      error: (error) => {
        console.error('Error loading subscription plans:', error);
        this.error = 'Failed to load subscription plans. Please refresh the page.';
      }
    });
    this.subscriptions.push(sub);
  }

  private async initializeStripe(): Promise<void> {
    try {
      this.stripe = await this.paymentService.initializeStripe();
      if (!this.stripe) {
        this.error = 'Failed to initialize payment system. Please refresh the page.';
      }
    } catch (error) {
      console.error('Error initializing Stripe:', error);
      this.error = 'Failed to initialize payment system. Please refresh the page.';
    }
  }

  selectPlan(planId: string): void {
    this.selectedPlan = planId;
    this.paymentError = null;
    
    // Render card input for paid plans; skip for basic
    if (planId !== 'basic' && this.stripe) {
      // Defer to next tick to ensure #payment-element exists
      setTimeout(() => this.initializePaymentElement());
    } else {
      this.cleanupPaymentElement();
    }
  }

  private async initializePaymentElement(): Promise<void> {
    try {
      await this.paymentService.createCardElement('payment-element');
      this.paymentError = null;
    } catch (error) {
      console.error('Error initializing card element:', error);
      this.paymentError = 'Failed to initialize payment form. Please try again.';
    }
  }

  private cleanupPaymentElement(): void {
    // Use payment service cleanup to remove elements if needed
    this.paymentService.destroyPaymentElement();
    this.paymentError = null;
    this.paymentMethodId = null;
  }

  onSubmit(): void {
    if (this.showSignup) {
      this.register();
    } else {
      this.login();
    }
  }

  private login(): void {
    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;
    this.error = null;

    const credentials: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (authResponse) => {
        this.authService.setAuthData(authResponse);
        this.router.navigate(['/chat']);
      },
      error: (error) => {
        this.error = error.error?.message || 'Login failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  private async register(): Promise<void> {
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = 'Please fill in all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    if (!this.selectedPlan) {
      this.error = 'Please select a plan to continue';
      return;
    }

    this.isLoading = true;
    this.error = null;

    // For basic plan, skip payment
    if (this.selectedPlan !== 'basic') {
      if (this.paymentError) {
        this.error = this.paymentError;
        this.isLoading = false;
        return;
      }

      try {
        // Create a Stripe PaymentMethod from the card element
        this.paymentMethodId = await this.paymentService.createPaymentMethodFromCard({
          name: `${this.firstName} ${this.lastName}`,
          email: this.email
        });
      } catch (error: any) {
        console.error('Payment method error:', error);
        this.error = error?.message || 'Failed to create payment method. Please check your card details.';
        this.isLoading = false;
        return;
      }
    }

    // Get the Stripe price ID for the selected plan
    const selectedPlan = this.subscriptionPlans.find(p => p.id === this.selectedPlan);
    const stripePriceId = selectedPlan?.stripePriceId || this.selectedPlan;

    const userData: RegisterRequest = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      subscriptionPlanId: stripePriceId,
      paymentMethodId: this.paymentMethodId || undefined
    };

    this.authService.register(userData).subscribe({
      next: (authResponse) => {
        this.authService.setAuthData(authResponse);
        this.router.navigate(['/chat']);
      },
      error: (error) => {
        this.error = error.error?.message || 'Registration failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  toggleSignup(): void {
    this.showSignup = !this.showSignup;
    this.error = null;
    this.clearForm();
  }

  private clearForm(): void {
    this.email = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.confirmPassword = '';
    this.selectedPlan = 'basic'; // Reset to default plan
  }

  demoLogin(): void {
    this.email = 'demo@profileai.com';
    this.password = 'demo123';
    this.login();
  }
}

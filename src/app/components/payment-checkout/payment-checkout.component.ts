import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { PaymentService, SubscriptionPlan, PaymentIntent } from '../../services/payment.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-payment-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-checkout.component.html',
  styleUrl: './payment-checkout.component.scss'
})
export class PaymentCheckoutComponent implements OnInit, OnDestroy {
  @ViewChild('paymentElement', { static: false }) paymentElementRef!: ElementRef;

  selectedPlan: SubscriptionPlan | null = null;
  paymentIntent: PaymentIntent | null = null;
  isLoading = false;
  error: string | null = null;
  isProcessing = false;
  
  private destroy$ = new Subject<void>();

  constructor(
    private paymentService: PaymentService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get plan from route params or state
    const planId = history.state?.planId;
    if (planId) {
      this.loadPlan(planId);
    } else {
      this.router.navigate(['/subscription']);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.paymentService.destroyPaymentElement();
  }

  private loadPlan(planId: string): void {
    this.isLoading = true;
    
    this.paymentService.getSubscriptionPlans()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (plans) => {
          this.selectedPlan = plans.find(plan => plan.id === planId) || null;
          if (this.selectedPlan) {
            this.createPaymentIntent();
          } else {
            this.error = 'Plan not found';
            this.isLoading = false;
          }
        },
        error: (error) => {
          this.error = 'Failed to load plan details';
          this.isLoading = false;
        }
      });
  }

  createPaymentIntent(): void {
    if (!this.selectedPlan) return;

    this.paymentService.createPaymentIntent({
      amount: this.selectedPlan.price,
      currency: this.selectedPlan.currency,
      planId: this.selectedPlan.id
    }).pipe(takeUntil(this.destroy$))
    .subscribe({
      next: async (paymentIntent) => {
        this.paymentIntent = paymentIntent;
        await this.initializePaymentElement();
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to create payment intent';
        this.isLoading = false;
      }
    });
  }

  private async initializePaymentElement(): Promise<void> {
    try {
      await this.paymentService.createCardElement('payment-element');
    } catch (error: any) {
      this.error = error.message || 'Failed to initialize payment form';
    }
  }

  async processPayment(): Promise<void> {
    if (!this.selectedPlan) return;

    this.isProcessing = true;
    this.error = null;

    try {
      // 1) Create a Stripe PaymentMethod from the card element
      const paymentMethodId = await this.paymentService.createPaymentMethodFromCard();

      // 2) Attach PaymentMethod to the customer via API (also creates Stripe customer if needed)
      await this.paymentService.addPaymentMethod(paymentMethodId).toPromise();

      // 3) Optionally set as default
      await this.paymentService.setDefaultPaymentMethod(paymentMethodId).toPromise();

      // 4) Create subscription using the attached PaymentMethod
      const subscription = await this.paymentService.createSubscription(
        this.selectedPlan.stripePriceId,
        paymentMethodId
      ).toPromise();

      // Update user role
      const currentUser = this.authService.getCurrentUser();
      if (currentUser && subscription) {
        currentUser.role = 'premium';
        currentUser.subscriptionStatus = 'active';
        currentUser.subscriptionId = subscription.id;
        this.authService.setAuthData({
          token: this.authService.getAuthToken()!,
          user: currentUser,
          refreshToken: localStorage.getItem('refreshToken')!
        });
      }

      this.router.navigate(['/payment/success'], { 
        state: { subscription, plan: this.selectedPlan } 
      });
    } catch (error: any) {
      this.error = error.message || 'Payment failed. Please try again.';
    } finally {
      this.isProcessing = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/subscription']);
  }

  formatPrice(amount: number, currency: string): string {
    return this.paymentService.formatPrice(amount, currency);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PaymentService, SubscriptionPlan, Customer } from '../../services/payment.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent implements OnInit, OnDestroy {
  subscriptionPlans: SubscriptionPlan[] = [];
  currentCustomer: Customer | null = null;
  isLoading = false;
  error: string | null = null;
  selectedPlan: SubscriptionPlan | null = null;
  showPaymentForm = false;
  
  private destroy$ = new Subject<void>();

  constructor(
    private paymentService: PaymentService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData(): void {
    this.isLoading = true;
    
    // Load subscription plans
    this.paymentService.getSubscriptionPlans()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (plans) => {
          this.subscriptionPlans = plans;
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'Failed to load subscription plans';
          this.isLoading = false;
        }
      });

    // Load current customer data
    this.paymentService.getCustomer()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (customer) => {
          this.currentCustomer = customer;
        },
        error: (error) => {
          console.error('Failed to load customer data:', error);
        }
      });
  }

  selectPlan(plan: SubscriptionPlan): void {
    this.selectedPlan = plan;
    this.showPaymentForm = true;
  }

  async subscribeToPlan(): Promise<void> {
    if (!this.selectedPlan) return;

    this.isLoading = true;
    this.error = null;

    try {
      const subscription = await this.paymentService.createSubscription(
        this.selectedPlan.stripePriceId
      ).toPromise();

      // Update user role in auth service
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

      this.router.navigate(['/profile']);
    } catch (error: any) {
      this.error = error.message || 'Failed to create subscription';
    } finally {
      this.isLoading = false;
    }
  }

  cancelSubscription(): void {
    if (!this.currentCustomer?.subscription) return;

    if (confirm('Are you sure you want to cancel your subscription?')) {
      this.isLoading = true;
      
      this.paymentService.cancelSubscription(
        this.currentCustomer.subscription.id,
        false // Cancel at period end
      ).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (subscription) => {
          this.currentCustomer!.subscription = subscription;
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'Failed to cancel subscription';
          this.isLoading = false;
        }
      });
    }
  }

  reactivateSubscription(): void {
    if (!this.currentCustomer?.subscription) return;

    this.isLoading = true;
    
    this.paymentService.reactivateSubscription(
      this.currentCustomer.subscription.id
    ).pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (subscription) => {
        this.currentCustomer!.subscription = subscription;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to reactivate subscription';
        this.isLoading = false;
      }
    });
  }

  formatPrice(amount: number, currency: string): string {
    return this.paymentService.formatPrice(amount, currency);
  }

  isCurrentPlan(plan: SubscriptionPlan): boolean {
    return this.currentCustomer?.subscription?.plan.id === plan.id;
  }

  hasActiveSubscription(): boolean {
    return this.currentCustomer?.subscription ? 
      this.paymentService.isSubscriptionActive(this.currentCustomer.subscription) : false;
  }

  getDaysUntilRenewal(): number {
    return this.currentCustomer?.subscription ? 
      this.paymentService.getDaysUntilRenewal(this.currentCustomer.subscription) : 0;
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }
}

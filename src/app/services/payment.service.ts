import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { loadStripe, Stripe, StripeElements, StripePaymentElement, StripeCardElement } from '@stripe/stripe-js';
import { environment } from '../../environments/environment';

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  stripePriceId: string;
}

export interface PaymentIntent {
  id: string;
  clientSecret: string;
  amount: number;
  currency: string;
  status: string;
}

export interface Subscription {
  id: string;
  status: 'active' | 'inactive' | 'cancelled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  plan: SubscriptionPlan;
  customerId: string;
}

export interface Customer {
  id: string;
  email: string;
  name: string;
  subscription?: Subscription;
  paymentMethods: PaymentMethod[];
}

export interface PaymentMethod {
  id: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
  };
  isDefault: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private stripe: Stripe | null = null;
  private elements: StripeElements | null = null;
  private paymentElement: StripePaymentElement | null = null;
  private cardElement: StripeCardElement | null = null;
  
  private readonly API_BASE = environment.apiUrl;
  private readonly STRIPE_PUBLISHABLE_KEY = environment.stripePublishableKey;

  private subscriptionPlansSubject = new BehaviorSubject<SubscriptionPlan[]>([]);
  public subscriptionPlans$ = this.subscriptionPlansSubject.asObservable();

  private customerSubject = new BehaviorSubject<Customer | null>(null);
  public customer$ = this.customerSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeStripe();
    this.loadSubscriptionPlans();
  }

  // Public method to initialize Stripe
  async initializeStripe(): Promise<Stripe | null> {
    if (!this.stripe) {
      this.stripe = await loadStripe(this.STRIPE_PUBLISHABLE_KEY);
    }
    return this.stripe;
  }

  // Subscription Plans
  loadSubscriptionPlans(): void {
    // Load subscription plans from backend
    this.http.get<SubscriptionPlan[]>(`${this.API_BASE}/subscriptions/plans`).subscribe({
      next: (plans) => {
        this.subscriptionPlansSubject.next(plans);
      },
      error: (error) => {
        console.error('Error loading subscription plans:', error);
        // Fallback to default plans if backend fails
        this.loadDefaultPlans();
      }
    });
  }

  private loadDefaultPlans(): void {
    // Fallback subscription plans if backend is unavailable
    const subscriptionPlans: SubscriptionPlan[] = [
      {
        id: 'pro',
        name: 'Pro Plan',
        description: 'Advanced features for professionals',
        price: 2999, // $29.99 per month
        currency: 'usd',
        interval: 'month',
        features: [
          'Unlimited profile research',
          'Advanced AI analysis',
          'Priority support',
          'Export capabilities',
          '50 searches per month'
        ],
        stripePriceId: environment.pricingPlans.pro
      },
      {
        id: 'premium',
        name: 'Premium Plan',
        description: 'Complete solution for power users',
        price: 4999, // $49.99 per month
        currency: 'usd',
        interval: 'month',
        features: [
          'Everything in Pro',
          'Unlimited searches',
          'Advanced analytics',
          'Dedicated support',
          'Custom reports',
          'API access'
        ],
        stripePriceId: environment.pricingPlans.premium
      }
    ];

    this.subscriptionPlansSubject.next(subscriptionPlans);
  }

  getSubscriptionPlans(): Observable<SubscriptionPlan[]> {
    return this.subscriptionPlans$;
  }

  // Create payment intent for subscription
  createPaymentIntent(request: { amount: number; currency: string; planId: string }): Observable<any> {
    return this.http.post(`${this.API_BASE}/payments/create-intent`, request);
  }

  // Customer Management
  getCustomer(): Observable<Customer> {
    // For demo purposes, return mock customer data
    const mockCustomer: Customer = {
      id: 'demo-customer-id',
      email: 'demo@profileai.com',
      name: 'Demo User',
      subscription: {
        id: 'demo-subscription-id',
        status: 'active',
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        cancelAtPeriodEnd: false,
        plan: {
          id: 'premium',
          name: 'Premium Plan',
          description: 'Advanced features for professionals',
          price: 2999,
          currency: 'usd',
          interval: 'month',
          features: [
            'Unlimited AI suggestions',
            'Advanced analytics',
            'Priority support',
            'Custom templates',
            'Export capabilities'
          ],
          stripePriceId: 'price_premium_monthly'
        },
        customerId: 'demo-customer-id'
      },
      paymentMethods: [
        {
          id: 'demo-pm-1',
          type: 'card',
          card: {
            brand: 'visa',
            last4: '4242',
            expMonth: 12,
            expYear: 2025
          },
          isDefault: true
        }
      ]
    };

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(mockCustomer);
        observer.complete();
      }, 500);
    });
  }

  updateCustomer(customerData: Partial<Customer>): Observable<Customer> {
    return this.http.put<Customer>(`${this.API_BASE}/customers/me`, customerData);
  }

  // Payment Methods
  getPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(`${this.API_BASE}/customers/payment-methods`);
  }

  addPaymentMethod(paymentMethodId: string): Observable<PaymentMethod> {
    return this.http.post<PaymentMethod>(`${this.API_BASE}/customers/payment-methods`, {
      paymentMethodId
    });
  }

  setDefaultPaymentMethod(paymentMethodId: string): Observable<any> {
    return this.http.post(`${this.API_BASE}/customers/payment-methods/default`, {
      paymentMethodId
    });
  }

  deletePaymentMethod(paymentMethodId: string): Observable<any> {
    return this.http.delete(`${this.API_BASE}/customers/payment-methods/${paymentMethodId}`);
  }

  // Subscription Management
  createSubscription(priceId: string, paymentMethodId?: string): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.API_BASE}/subscriptions`, {
      priceId,
      paymentMethodId
    });
  }

  updateSubscription(subscriptionId: string, priceId: string): Observable<Subscription> {
    return this.http.put<Subscription>(`${this.API_BASE}/subscriptions/${subscriptionId}`, {
      priceId
    });
  }

  cancelSubscription(subscriptionId: string, immediately: boolean = false): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.API_BASE}/subscriptions/${subscriptionId}/cancel`, {
      immediately
    });
  }

  reactivateSubscription(subscriptionId: string): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.API_BASE}/subscriptions/${subscriptionId}/reactivate`, {});
  }

  getSubscription(subscriptionId: string): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.API_BASE}/subscriptions/${subscriptionId}`);
  }

  // Stripe Elements Integration - Payment Element (not used for PM creation)
  async createPaymentElement(clientSecret: string, elementId: string): Promise<void> {
    if (!this.stripe) {
      throw new Error('Stripe not initialized');
    }

    this.elements = this.stripe.elements({
      clientSecret,
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#0570de',
          colorBackground: '#ffffff',
          colorText: '#30313d',
          colorDanger: '#df1b41',
          fontFamily: 'Ideal Sans, system-ui, sans-serif',
          spacingUnit: '2px',
          borderRadius: '4px',
        }
      }
    });

    this.paymentElement = this.elements.create('payment');
    await this.paymentElement.mount(`#${elementId}`);
  }

  async confirmPayment(returnUrl?: string): Promise<any> {
    if (!this.stripe || !this.paymentElement) {
      throw new Error('Stripe or payment element not initialized');
    }

    const { error } = await this.stripe.confirmPayment({
      elements: this.elements!,
      confirmParams: {
        return_url: returnUrl || window.location.origin + '/payment/success',
      },
    });

    if (error) {
      throw error;
    }
  }

  // Card Element for PaymentMethod creation (for subscriptions)
  async createCardElement(elementId: string): Promise<void> {
    if (!this.stripe) {
      throw new Error('Stripe not initialized');
    }

    this.elements = this.stripe.elements({
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#0570de',
          colorBackground: '#ffffff',
          colorText: '#30313d',
          colorDanger: '#df1b41',
          fontFamily: 'Ideal Sans, system-ui, sans-serif',
          spacingUnit: '2px',
          borderRadius: '4px',
        }
      }
    });

    this.cardElement = this.elements.create('card');
    await this.cardElement.mount(`#${elementId}`);
  }

  async createPaymentMethodFromCard(billingDetails?: { name?: string; email?: string }): Promise<string> {
    if (!this.stripe || !this.cardElement) {
      throw new Error('Stripe or card element not initialized');
    }

    const result = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement,
      billing_details: billingDetails
    } as any);

    if (result.error || !result.paymentMethod) {
      throw new Error(result.error?.message || 'Failed to create payment method');
    }

    return result.paymentMethod.id;
  }

  // One-time Payments (using the subscription version above)

  // Webhooks (for handling Stripe events)
  handleWebhook(payload: any, signature: string): Observable<any> {
    return this.http.post(`${this.API_BASE}/payments/webhooks/stripe`, {
      payload,
      signature
    });
  }

  // Utility Methods
  formatPrice(amount: number, currency: string = 'usd'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  }

  isSubscriptionActive(subscription: Subscription): boolean {
    return subscription.status === 'active' && 
           new Date(subscription.currentPeriodEnd) > new Date();
  }

  getDaysUntilRenewal(subscription: Subscription): number {
    const now = new Date();
    const renewalDate = new Date(subscription.currentPeriodEnd);
    const diffTime = renewalDate.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Cleanup
  destroyPaymentElement(): void {
    if (this.paymentElement) {
      this.paymentElement.destroy();
      this.paymentElement = null;
    }
    if (this.cardElement) {
      try {
        this.cardElement.unmount();
      } catch {}
      this.cardElement = null;
    }
    if (this.elements) {
      this.elements = null;
    }
  }
}

# User Management & Stripe Integration Guide

This guide explains how to manage users and integrate Stripe payments in your ProfileAI Angular application.

## 🚀 Features Implemented

### User Management
- **Enhanced Authentication System**: Complete user registration and login with proper validation
- **User Roles**: Support for Free, Premium, and Admin user roles
- **User Profile Management**: Comprehensive profile editing with skills, experience, and education
- **Admin Panel**: Full user management interface for administrators
- **Role-based Access Control**: Different features and navigation based on user roles

### Stripe Integration
- **Payment Service**: Complete Stripe integration with subscription management
- **Subscription Plans**: Flexible subscription system with multiple tiers
- **Payment Processing**: Secure payment processing with Stripe Elements
- **Subscription Management**: Users can view, upgrade, downgrade, and cancel subscriptions
- **Admin Billing Management**: Administrators can manage user subscriptions and billing

## 📁 File Structure

```
src/app/
├── services/
│   ├── auth.service.ts          # Enhanced authentication with user management
│   ├── payment.service.ts       # Stripe payment and subscription management
│   └── profile.service.ts       # User profile management
├── components/
│   ├── login/
│   │   ├── login.component.ts   # Enhanced with registration support
│   │   ├── login.component.html
│   │   └── login.component.scss
│   ├── profile/
│   │   ├── profile.component.ts # Updated with subscription status
│   │   ├── profile.component.html
│   │   └── profile.component.scss
│   ├── subscription/
│   │   ├── subscription.component.ts   # Subscription management
│   │   ├── subscription.component.html
│   │   └── subscription.component.scss
│   ├── user-management/
│   │   ├── user-management.component.ts   # Admin user management
│   │   ├── user-management.component.html
│   │   └── user-management.component.scss
│   └── payment-checkout/
│       ├── payment-checkout.component.ts   # Stripe checkout flow
│       ├── payment-checkout.component.html
│       └── payment-checkout.component.scss
└── guards/
    └── auth.guard.ts            # Route protection
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install @stripe/stripe-js
```

### 2. Configure Stripe

1. Get your Stripe API keys from the [Stripe Dashboard](https://dashboard.stripe.com/)
2. Update the `STRIPE_PUBLISHABLE_KEY` in `src/app/services/payment.service.ts`:

```typescript
private readonly STRIPE_PUBLISHABLE_KEY = 'pk_test_your_publishable_key_here';
```

### 3. Backend API Setup

You'll need to create a backend API that handles:

#### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Token refresh
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/change-password` - Change password
- `DELETE /api/users/account` - Delete account

#### Payment Endpoints
- `GET /api/subscriptions/plans` - Get subscription plans
- `POST /api/subscriptions` - Create subscription
- `PUT /api/subscriptions/:id` - Update subscription
- `POST /api/subscriptions/:id/cancel` - Cancel subscription
- `POST /api/subscriptions/:id/reactivate` - Reactivate subscription
- `GET /api/customers/me` - Get customer data
- `PUT /api/customers/me` - Update customer data
- `GET /api/customers/payment-methods` - Get payment methods
- `POST /api/customers/payment-methods` - Add payment method
- `POST /api/customers/payment-methods/default` - Set default payment method
- `DELETE /api/customers/payment-methods/:id` - Delete payment method
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/webhooks/stripe` - Stripe webhook handler

### 4. Environment Configuration

Create environment files for different configurations:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  stripePublishableKey: 'pk_test_your_key_here'
};
```

## 🎯 User Management Features

### User Roles

1. **Free Users**
   - Basic profile management
   - Limited features
   - Can upgrade to premium

2. **Premium Users**
   - Full access to all features
   - Advanced AI capabilities
   - Priority support

3. **Admin Users**
   - User management panel
   - Subscription management
   - System administration

### User Registration & Login

The enhanced login component supports both registration and login:

```typescript
// Registration
const userData: RegisterRequest = {
  email: 'user@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe'
};

this.authService.register(userData).subscribe({
  next: (authResponse) => {
    this.authService.setAuthData(authResponse);
    this.router.navigate(['/profile']);
  }
});
```

### Admin User Management

Administrators can:
- View all users with search and filtering
- Change user roles
- Suspend/activate users
- Delete users
- Export user data
- Manage subscriptions

## 💳 Stripe Integration Features

### Subscription Plans

Define your subscription plans in your backend:

```typescript
const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    description: 'Basic features for getting started',
    price: 0,
    currency: 'usd',
    interval: 'month',
    features: [
      'Basic profile creation',
      'Limited AI suggestions',
      'Email support'
    ],
    stripePriceId: 'price_free'
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    description: 'Advanced features for professionals',
    price: 2999, // $29.99 in cents
    currency: 'usd',
    interval: 'month',
    features: [
      'Unlimited AI suggestions',
      'Advanced analytics',
      'Priority support',
      'Custom templates'
    ],
    stripePriceId: 'price_premium_monthly'
  }
];
```

### Payment Processing

The payment service handles:
- Creating payment intents
- Processing subscriptions
- Managing payment methods
- Handling webhooks
- Subscription lifecycle management

### Subscription Management

Users can:
- View current subscription status
- Upgrade/downgrade plans
- Cancel subscriptions
- Update payment methods
- View billing history

## 🔐 Security Considerations

### Authentication
- JWT tokens with refresh token rotation
- Secure password hashing (bcrypt recommended)
- Input validation and sanitization
- CSRF protection

### Payment Security
- Never store card details on your servers
- Use Stripe's secure tokenization
- Implement webhook signature verification
- PCI DSS compliance through Stripe

### API Security
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection

## 🚀 Deployment

### Frontend Deployment
1. Build the application: `ng build --prod`
2. Deploy to your hosting service (Vercel, Netlify, etc.)
3. Update API URLs in environment files

### Backend Deployment
1. Set up your backend API with the required endpoints
2. Configure Stripe webhooks to point to your API
3. Set up database for user and subscription data
4. Configure environment variables

### Stripe Configuration
1. Set up webhook endpoints in Stripe Dashboard
2. Configure allowed domains for your application
3. Set up test and live mode configurations

## 📊 Monitoring & Analytics

### User Analytics
- Track user registrations and conversions
- Monitor subscription metrics
- Analyze user engagement

### Payment Analytics
- Track subscription revenue
- Monitor churn rates
- Analyze payment failures

### Error Monitoring
- Implement error tracking (Sentry, etc.)
- Monitor API performance
- Track payment processing errors

## 🔧 Customization

### UI Customization
- Modify component styles in SCSS files
- Update color schemes and branding
- Customize form layouts and validation messages

### Business Logic
- Adjust subscription plans and pricing
- Modify user role permissions
- Customize payment flows

### Integration
- Add additional payment methods
- Integrate with other services
- Extend user profile fields

## 🐛 Troubleshooting

### Common Issues

1. **Stripe Integration Not Working**
   - Check API keys are correct
   - Verify webhook endpoints are configured
   - Ensure CORS is properly set up

2. **Authentication Issues**
   - Check JWT token expiration
   - Verify refresh token logic
   - Ensure proper error handling

3. **Payment Processing Errors**
   - Check Stripe dashboard for failed payments
   - Verify webhook signatures
   - Review error logs

### Debug Mode

Enable debug logging in development:

```typescript
// In payment service
private readonly DEBUG = !environment.production;

private log(message: string, data?: any) {
  if (this.DEBUG) {
    console.log(`[PaymentService] ${message}`, data);
  }
}
```

## 📚 Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Angular Documentation](https://angular.io/docs)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [Payment Security Guidelines](https://stripe.com/docs/security)

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section
2. Review Stripe and Angular documentation
3. Check error logs and browser console
4. Contact support with specific error messages

---

This implementation provides a solid foundation for user management and payment processing. Customize it according to your specific business requirements and security needs.

export const environment = {
  production: true,
  apiUrl: 'https://your-production-api.com/api', // User management API - Update this to your production API URL
  profileResearchApiUrl: 'https://xtraordinary.app.n8n.cloud/webhook-test/lead-research', // Profile research API
  stripePublishableKey: 'pk_live_your_live_stripe_key_here', // Add your live Stripe key
  stripeSecretKey: 'sk_live_your_live_stripe_secret_key_here', // Add your live Stripe secret key
  stripeWebhookSecret: 'whsec_your_live_webhook_secret_here', // Add your live webhook secret
  pricingPlans: {
    basic: 'price_live_basic_id_here',
    pro: 'price_live_pro_id_here', 
    premium: 'price_live_premium_id_here'
  },
  appName: 'ProfileAI'
};

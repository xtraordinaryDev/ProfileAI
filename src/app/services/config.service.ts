import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get apiUrl(): string {
    return environment.apiUrl;
  }

  get profileResearchApiUrl(): string {
    return environment.profileResearchApiUrl;
  }

  get stripePublishableKey(): string {
    return environment.stripePublishableKey;
  }

  get stripeSecretKey(): string {
    return environment.stripeSecretKey;
  }

  get stripeWebhookSecret(): string {
    return environment.stripeWebhookSecret;
  }

  get pricingPlans(): any {
    return environment.pricingPlans;
  }

  get appName(): string {
    return environment.appName;
  }

  get isProduction(): boolean {
    return environment.production;
  }
}

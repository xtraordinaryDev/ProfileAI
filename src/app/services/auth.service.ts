import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'free' | 'premium' | 'admin';
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
  subscriptionId?: string;
  customerId?: string;
  createdAt: Date;
  lastLoginAt: Date;
  trialCount: number;
  trialUsed: number;
  trialExpiry?: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  subscriptionPlanId?: string; // Plan ID (basic, pro, premium)
  paymentMethodId?: string; // Optional payment method ID
}

export interface AuthResponse {
  token: string;
  user: User;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  private readonly API_BASE = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('currentUser');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        this.currentUserSubject.next(user);
        this.isLoggedInSubject.next(true);
      } catch (error) {
        this.clearAuthData();
      }
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Handle demo login locally
    if (credentials.email === 'demo@profileai.com' && credentials.password === 'demo123') {
      return this.createDemoAuthResponse();
    }
    
    return this.http.post<AuthResponse>(`${this.API_BASE}/auth/login`, credentials);
  }

  private createDemoAuthResponse(): Observable<AuthResponse> {
    const demoUser: User = {
      id: 'demo-user-id',
      email: 'demo@profileai.com',
      firstName: 'Demo',
      lastName: 'User',
      role: 'free', // Changed to free to test trial system
      subscriptionStatus: 'inactive',
      subscriptionId: undefined,
      customerId: 'demo-customer-id',
      createdAt: new Date(),
      lastLoginAt: new Date(),
      trialCount: 50,
      trialUsed: 0, // Reset demo usage
      trialExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    };

    const authResponse: AuthResponse = {
      token: 'demo-jwt-token-' + Date.now(),
      refreshToken: 'demo-refresh-token-' + Date.now(),
      user: demoUser
    };

    return new Observable(observer => {
      // Simulate API delay
      setTimeout(() => {
        observer.next(authResponse);
        observer.complete();
      }, 1000);
    });
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_BASE}/auth/register`, userData);
  }

  logout(): void {
    this.clearAuthData();
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  refreshToken(): Observable<AuthResponse> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<AuthResponse>(`${this.API_BASE}/auth/refresh`, { refreshToken });
  }

  updateUserProfile(userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.API_BASE}/users/profile`, userData);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.API_BASE}/users/change-password`, {
      currentPassword,
      newPassword
    });
  }

  deleteAccount(): Observable<any> {
    return this.http.delete(`${this.API_BASE}/users/account`);
  }

  // Helper methods
  setAuthData(authResponse: AuthResponse): void {
    localStorage.setItem('authToken', authResponse.token);
    localStorage.setItem('refreshToken', authResponse.refreshToken);
    localStorage.setItem('currentUser', JSON.stringify(authResponse.user));
    
    this.currentUserSubject.next(authResponse.user);
    this.isLoggedInSubject.next(true);
  }

  private clearAuthData(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  isPremium(): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === 'premium' && user.subscriptionStatus === 'active' : false;
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Trial management methods
  canUseTrial(): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    // Check if user has premium subscription
    if (user.role === 'premium' && user.subscriptionStatus === 'active') {
      return true;
    }
    
    // Check trial limits
    if (user.trialUsed >= user.trialCount) {
      return false;
    }
    
    // Check trial expiry
    if (user.trialExpiry && new Date() > user.trialExpiry) {
      return false;
    }
    
    return true;
  }

  getRemainingTrials(): number {
    const user = this.getCurrentUser();
    if (!user) return 0;
    
    if (user.role === 'premium' && user.subscriptionStatus === 'active') {
      return -1; // Unlimited
    }
    
    return Math.max(0, user.trialCount - user.trialUsed);
  }

  useTrial(): boolean {
    const user = this.getCurrentUser();
    if (!user || !this.canUseTrial()) {
      return false;
    }
    
    // If user has premium subscription, no need to track trials
    if (user.role === 'premium' && user.subscriptionStatus === 'active') {
      return true;
    }
    
    // Increment trial usage
    user.trialUsed++;
    
    // Update user in localStorage and subject
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return true;
  }

  isTrialExpired(): boolean {
    const user = this.getCurrentUser();
    if (!user || !user.trialExpiry) return false;
    
    return new Date() > user.trialExpiry;
  }

  getTrialStatus(): { remaining: number; expired: boolean; hasSubscription: boolean } {
    const user = this.getCurrentUser();
    if (!user) {
      return { remaining: 0, expired: true, hasSubscription: false };
    }
    
    const hasSubscription = user.role === 'premium' && user.subscriptionStatus === 'active';
    const expired = this.isTrialExpired();
    const remaining = hasSubscription ? -1 : Math.max(0, user.trialCount - user.trialUsed);
    
    return { remaining, expired, hasSubscription };
  }
}

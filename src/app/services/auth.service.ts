import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    // Check if user is already logged in (from localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isLoggedInSubject.next(true);
    }
  }

  login(email: string, password: string): boolean {
    // Simple mock authentication - in real app, this would call an API
    if (email && password) {
      const token = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('authToken', token);
      localStorage.setItem('userEmail', email);
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('userEmail');
  }
}

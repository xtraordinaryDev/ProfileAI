import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;
  showSignup = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.email && this.password) {
      this.isLoading = true;
      
      // Simulate API call delay
      setTimeout(() => {
        const success = this.authService.login(this.email, this.password);
        this.isLoading = false;
        
        if (success) {
          this.router.navigate(['/chat']);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }, 1500);
    }
  }

  demoLogin(): void {
    this.email = 'demo@profileai.com';
    this.password = 'demo123';
    this.onSubmit();
  }
}

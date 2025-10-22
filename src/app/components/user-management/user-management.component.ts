import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { AuthService, User } from '../../services/auth.service';
import { PaymentService, Customer } from '../../services/payment.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit, OnDestroy {
  users: User[] = [];
  customers: Customer[] = [];
  isLoading = false;
  error: string | null = null;
  searchTerm = '';
  selectedRole = 'all';
  selectedStatus = 'all';
  currentPage = 1;
  itemsPerPage = 10;
  totalUsers = 0;
  Math = Math; // Make Math available in template

  private destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.error = null;

    // In a real app, you'd have an admin API endpoint
    // For now, we'll simulate with mock data
    setTimeout(() => {
      this.users = this.getMockUsers();
      this.totalUsers = this.users.length;
      this.isLoading = false;
    }, 1000);
  }

  private getMockUsers(): User[] {
    return [
      {
        id: '1',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        role: 'premium',
        subscriptionStatus: 'active',
        subscriptionId: 'sub_123',
        customerId: 'cus_123',
        createdAt: new Date('2024-01-15'),
        lastLoginAt: new Date('2024-10-20')
      },
      {
        id: '2',
        email: 'jane.smith@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
        role: 'free',
        subscriptionStatus: 'inactive',
        createdAt: new Date('2024-02-20'),
        lastLoginAt: new Date('2024-10-19')
      },
      {
        id: '3',
        email: 'admin@profileai.com',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        subscriptionStatus: 'active',
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date('2024-10-20')
      }
    ];
  }

  get filteredUsers(): User[] {
    let filtered = this.users;

    // Filter by search term
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(user => 
        user.email.toLowerCase().includes(term) ||
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term)
      );
    }

    // Filter by role
    if (this.selectedRole !== 'all') {
      filtered = filtered.filter(user => user.role === this.selectedRole);
    }

    // Filter by subscription status
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(user => user.subscriptionStatus === this.selectedStatus);
    }

    return filtered;
  }

  get paginatedUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  onSearchChange(): void {
    this.currentPage = 1; // Reset to first page when searching
  }

  onFilterChange(): void {
    this.currentPage = 1; // Reset to first page when filtering
  }

  onRoleChange(user: User, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newRole = target.value as 'free' | 'premium' | 'admin';
    this.changeUserRole(user, newRole);
  }

  changeUserRole(user: User, newRole: 'free' | 'premium' | 'admin'): void {
    if (confirm(`Are you sure you want to change ${user.firstName} ${user.lastName}'s role to ${newRole}?`)) {
      // In a real app, you'd call an API here
      user.role = newRole;
      
      // Update subscription status based on role
      if (newRole === 'premium') {
        user.subscriptionStatus = 'active';
      } else if (newRole === 'free') {
        user.subscriptionStatus = 'inactive';
      }
    }
  }

  suspendUser(user: User): void {
    if (confirm(`Are you sure you want to suspend ${user.firstName} ${user.lastName}?`)) {
      // In a real app, you'd call an API here
      user.subscriptionStatus = 'cancelled';
    }
  }

  activateUser(user: User): void {
    if (confirm(`Are you sure you want to activate ${user.firstName} ${user.lastName}?`)) {
      // In a real app, you'd call an API here
      user.subscriptionStatus = 'active';
    }
  }

  deleteUser(user: User): void {
    if (confirm(`Are you sure you want to permanently delete ${user.firstName} ${user.lastName}? This action cannot be undone.`)) {
      // In a real app, you'd call an API here
      this.users = this.users.filter(u => u.id !== user.id);
      this.totalUsers = this.users.length;
    }
  }

  viewUserDetails(user: User): void {
    // Navigate to user details page
    this.router.navigate(['/admin/users', user.id]);
  }

  exportUsers(): void {
    // In a real app, you'd generate and download a CSV/Excel file
    const csvContent = this.generateCSV(this.filteredUsers);
    this.downloadCSV(csvContent, 'users.csv');
  }

  private generateCSV(users: User[]): string {
    const headers = ['ID', 'Email', 'First Name', 'Last Name', 'Role', 'Subscription Status', 'Created At', 'Last Login'];
    const rows = users.map(user => [
      user.id,
      user.email,
      user.firstName,
      user.lastName,
      user.role,
      user.subscriptionStatus,
      user.createdAt.toISOString().split('T')[0],
      user.lastLoginAt.toISOString().split('T')[0]
    ]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  private downloadCSV(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'admin': return 'badge-admin';
      case 'premium': return 'badge-premium';
      case 'free': return 'badge-free';
      default: return 'badge-default';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'active': return 'badge-active';
      case 'inactive': return 'badge-inactive';
      case 'cancelled': return 'badge-cancelled';
      default: return 'badge-default';
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ProfileService, UserProfile, Experience, Education } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      <!-- Header -->
      <header class="profile-header">
        <div class="header-left">
          <div class="logo">
            <img src="assets/images/ProfileAILogoTransparent.png" alt="ProFile AI" class="logo-image">
            <div class="logo-text">
              ProFile<span class="ai">AI</span>
            </div>
          </div>
        </div>
        <div class="header-right">
          <button class="btn btn-secondary" (click)="goToChat()">
            Back to Chat
          </button>
          <button class="btn btn-secondary" (click)="logout()">
            Logout
          </button>
        </div>
      </header>

      <!-- Profile Content -->
      <div class="profile-content">
        <div class="profile-sidebar">
          <div class="profile-card">
            <div class="profile-avatar">
              <div class="avatar-icon">{{ getInitials() }}</div>
            </div>
            <h3>{{ profile?.name || 'Your Name' }}</h3>
            <p class="profile-title">{{ profile?.title || 'Your Title' }}</p>
            <p class="profile-email">{{ profile?.email || 'your.email@example.com' }}</p>
            
            <div class="profile-actions">
              <button class="btn btn-primary" (click)="editMode = !editMode">
                {{ editMode ? 'Save Changes' : 'Edit Profile' }}
              </button>
            </div>
          </div>
        </div>

        <div class="profile-main">
          <!-- Basic Information -->
          <div class="card">
            <h2>Basic Information</h2>
            <div class="form-grid">
              <div class="input-group">
                <label>Full Name</label>
                <input 
                  [(ngModel)]="profileForm.name" 
                  [readonly]="!editMode"
                  placeholder="Enter your full name"
                >
              </div>
              <div class="input-group">
                <label>Professional Title</label>
                <input 
                  [(ngModel)]="profileForm.title" 
                  [readonly]="!editMode"
                  placeholder="e.g., Software Engineer, Marketing Manager"
                >
              </div>
              <div class="input-group full-width">
                <label>Professional Summary</label>
                <textarea 
                  [(ngModel)]="profileForm.summary" 
                  [readonly]="!editMode"
                  rows="4"
                  placeholder="Write a brief summary of your professional background and goals..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="card">
            <h2>Skills</h2>
            <div class="skills-container">
              <div class="skills-list">
                <span 
                  *ngFor="let skill of profileForm.skills" 
                  class="skill-tag"
                >
                  {{ skill }}
                  <button 
                    *ngIf="editMode" 
                    class="remove-skill" 
                    (click)="removeSkill(skill)"
                  >×</button>
                </span>
              </div>
              <div *ngIf="editMode" class="add-skill">
                <input 
                  [(ngModel)]="newSkill" 
                  placeholder="Add a skill"
                  (keydown.enter)="addSkill()"
                >
                <button class="btn btn-primary" (click)="addSkill()">Add</button>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div class="card">
            <h2>Work Experience</h2>
            <div class="experience-list">
              <div 
                *ngFor="let exp of profileForm.experience; let i = index" 
                class="experience-item"
              >
                <div class="experience-content">
                  <h4>{{ exp.position }}</h4>
                  <p class="company">{{ exp.company }}</p>
                  <p class="duration">{{ exp.duration }}</p>
                  <p class="description">{{ exp.description }}</p>
                </div>
                <button 
                  *ngIf="editMode" 
                  class="remove-item" 
                  (click)="removeExperience(i)"
                >×</button>
              </div>
            </div>
            <button 
              *ngIf="editMode" 
              class="btn btn-secondary" 
              (click)="addExperience()"
            >
              Add Experience
            </button>
          </div>

          <!-- Education -->
          <div class="card">
            <h2>Education</h2>
            <div class="education-list">
              <div 
                *ngFor="let edu of profileForm.education; let i = index" 
                class="education-item"
              >
                <div class="education-content">
                  <h4>{{ edu.degree }}</h4>
                  <p class="institution">{{ edu.institution }}</p>
                  <p class="year">{{ edu.year }}</p>
                </div>
                <button 
                  *ngIf="editMode" 
                  class="remove-item" 
                  (click)="removeEducation(i)"
                >×</button>
              </div>
            </div>
            <button 
              *ngIf="editMode" 
              class="btn btn-secondary" 
              (click)="addEducation()"
            >
              Add Education
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      min-height: 100vh;
      background: #f8f9fa;
    }
    
    .profile-header {
      background: white;
      border-bottom: 1px solid var(--border-light);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(26, 58, 107, 0.05);
    }
    
    .header-left .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .logo-image {
      width: 40px;
      height: 40px;
      object-fit: contain;
      filter: drop-shadow(0 2px 4px rgba(26, 58, 107, 0.2));
      transition: transform 0.3s ease;
    }
    
    .logo-image:hover {
      transform: scale(1.05);
    }
    
    .logo-text {
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-dark);
    }
    
    .logo-text .ai {
      color: var(--primary-bright);
      margin-left: 4px;
    }
    
    .header-right {
      display: flex;
      gap: 12px;
    }
    
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
      text-decoration: none;
      display: inline-block;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);
      color: white;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px var(--shadow);
    }
    
    .btn-secondary {
      background: white;
      color: var(--primary-dark);
      border: 1px solid var(--primary-dark);
    }
    
    .btn-secondary:hover {
      background: var(--primary-dark);
      color: white;
    }
    
    .profile-content {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 24px;
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .profile-sidebar {
      position: sticky;
      top: 24px;
      height: fit-content;
    }
    
    .profile-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      box-shadow: 0 4px 20px var(--shadow);
    }
    
    .profile-avatar {
      margin-bottom: 16px;
    }
    
    .avatar-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 24px;
      margin: 0 auto;
    }
    
    .profile-card h3 {
      color: var(--primary-dark);
      margin-bottom: 8px;
      font-size: 20px;
    }
    
    .profile-title {
      color: var(--primary-bright);
      font-weight: 500;
      margin-bottom: 8px;
    }
    
    .profile-email {
      color: var(--text-light);
      font-size: 14px;
      margin-bottom: 20px;
    }
    
    .profile-actions {
      margin-top: 20px;
    }
    
    .profile-main {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px var(--shadow);
    }
    
    .card h2 {
      color: var(--primary-dark);
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
    }
    
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .full-width {
      grid-column: 1 / -1;
    }
    
    .input-group {
      display: flex;
      flex-direction: column;
    }
    
    .input-group label {
      font-weight: 500;
      color: var(--text-dark);
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    .input-group input,
    .input-group textarea {
      padding: 12px 16px;
      border: 2px solid var(--border-light);
      border-radius: 8px;
      font-size: 14px;
      transition: border-color 0.3s ease;
      font-family: inherit;
    }
    
    .input-group input:focus,
    .input-group textarea:focus {
      outline: none;
      border-color: var(--primary-bright);
    }
    
    .input-group input[readonly],
    .input-group textarea[readonly] {
      background: #f8f9fa;
      cursor: default;
    }
    
    .skills-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-tag {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .remove-skill {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      padding: 0;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .remove-skill:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    .add-skill {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    
    .add-skill input {
      flex: 1;
      padding: 8px 12px;
      border: 2px solid var(--border-light);
      border-radius: 20px;
      font-size: 12px;
    }
    
    .add-skill .btn {
      padding: 8px 16px;
      font-size: 12px;
    }
    
    .experience-list,
    .education-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .experience-item,
    .education-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 16px;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid var(--primary-bright);
    }
    
    .experience-content h4,
    .education-content h4 {
      color: var(--primary-dark);
      margin-bottom: 4px;
      font-size: 16px;
    }
    
    .company,
    .institution {
      color: var(--primary-bright);
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .duration,
    .year {
      color: var(--text-light);
      font-size: 12px;
      margin-bottom: 8px;
    }
    
    .description {
      color: var(--text-dark);
      font-size: 14px;
      line-height: 1.4;
    }
    
    .remove-item {
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .remove-item:hover {
      background: #c0392b;
    }
    
    @media (max-width: 1024px) {
      .profile-content {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 16px;
      }
      
      .profile-sidebar {
        position: static;
      }
      
      .form-grid {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 768px) {
      .profile-header {
        padding: 12px 16px;
      }
      
      .header-right {
        gap: 8px;
      }
      
      .btn {
        padding: 6px 12px;
        font-size: 12px;
      }
      
      .card {
        padding: 16px;
      }
    }
  `]
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile: UserProfile | null = null;
  profileForm: Partial<UserProfile> = {
    name: '',
    title: '',
    summary: '',
    skills: [],
    experience: [],
    education: []
  };
  editMode = false;
  newSkill = '';
  private profileSubscription?: Subscription;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileSubscription = this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
      if (profile) {
        this.profileForm = { ...profile };
      } else {
        // Initialize with user email if no profile exists
        const email = this.authService.getCurrentUser();
        this.profileForm = {
          name: '',
          title: '',
          summary: '',
          email: email || '',
          skills: [],
          experience: [],
          education: [],
          contact: {
            email: email || ''
          }
        };
      }
    });
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }

  getInitials(): string {
    if (this.profileForm.name) {
      return this.profileForm.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return 'U';
  }

  addSkill(): void {
    if (this.newSkill.trim() && !this.profileForm.skills?.includes(this.newSkill.trim())) {
      this.profileForm.skills = [...(this.profileForm.skills || []), this.newSkill.trim()];
      this.newSkill = '';
    }
  }

  removeSkill(skill: string): void {
    this.profileForm.skills = this.profileForm.skills?.filter(s => s !== skill) || [];
  }

  addExperience(): void {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    this.profileForm.experience = [...(this.profileForm.experience || []), newExp];
  }

  removeExperience(index: number): void {
    this.profileForm.experience = this.profileForm.experience?.filter((_, i) => i !== index) || [];
  }

  addEducation(): void {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      year: ''
    };
    this.profileForm.education = [...(this.profileForm.education || []), newEdu];
  }

  removeEducation(index: number): void {
    this.profileForm.education = this.profileForm.education?.filter((_, i) => i !== index) || [];
  }

  saveProfile(): void {
    if (this.profileForm) {
      this.profileService.updateProfile(this.profileForm);
      this.editMode = false;
    }
  }

  goToChat(): void {
    this.router.navigate(['/chat']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

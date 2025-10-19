import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  title: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  contact: ContactInfo;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileSubject = new BehaviorSubject<UserProfile | null>(null);
  public profile$ = this.profileSubject.asObservable();

  constructor() {
    // Load profile from localStorage if exists
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.profileSubject.next(JSON.parse(savedProfile));
    }
  }

  updateProfile(profile: Partial<UserProfile>): void {
    const currentProfile = this.profileSubject.value;
    const updatedProfile = { ...currentProfile, ...profile } as UserProfile;
    this.profileSubject.next(updatedProfile);
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
  }

  addExperience(experience: Omit<Experience, 'id'>): void {
    const currentProfile = this.profileSubject.value;
    if (currentProfile) {
      const newExperience: Experience = {
        ...experience,
        id: Date.now().toString()
      };
      const updatedProfile = {
        ...currentProfile,
        experience: [...currentProfile.experience, newExperience]
      };
      this.updateProfile(updatedProfile);
    }
  }

  addEducation(education: Omit<Education, 'id'>): void {
    const currentProfile = this.profileSubject.value;
    if (currentProfile) {
      const newEducation: Education = {
        ...education,
        id: Date.now().toString()
      };
      const updatedProfile = {
        ...currentProfile,
        education: [...currentProfile.education, newEducation]
      };
      this.updateProfile(updatedProfile);
    }
  }

  addSkill(skill: string): void {
    const currentProfile = this.profileSubject.value;
    if (currentProfile && !currentProfile.skills.includes(skill)) {
      const updatedProfile = {
        ...currentProfile,
        skills: [...currentProfile.skills, skill]
      };
      this.updateProfile(updatedProfile);
    }
  }

  removeSkill(skill: string): void {
    const currentProfile = this.profileSubject.value;
    if (currentProfile) {
      const updatedProfile = {
        ...currentProfile,
        skills: currentProfile.skills.filter(s => s !== skill)
      };
      this.updateProfile(updatedProfile);
    }
  }

  getProfile(): UserProfile | null {
    return this.profileSubject.value;
  }
}

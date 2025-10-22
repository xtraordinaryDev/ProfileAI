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
    } else {
      // For demo purposes, create a sample profile
      this.createDemoProfile();
    }
  }

  private createDemoProfile(): void {
    const demoProfile: UserProfile = {
      id: 'demo-profile-id',
      name: 'Demo User',
      email: 'demo@profileai.com',
      title: 'Senior Software Engineer',
      summary: 'Experienced software engineer with expertise in full-stack development, AI integration, and modern web technologies. Passionate about creating innovative solutions that solve real-world problems.',
      skills: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Python',
        'Machine Learning',
        'AWS',
        'Docker',
        'Git'
      ],
      experience: [
        {
          id: 'exp-1',
          company: 'TechCorp Solutions',
          position: 'Senior Software Engineer',
          duration: '2021 - Present',
          description: 'Led development of AI-powered applications using Angular and Python. Implemented microservices architecture and improved system performance by 40%.'
        },
        {
          id: 'exp-2',
          company: 'StartupXYZ',
          position: 'Full Stack Developer',
          duration: '2019 - 2021',
          description: 'Developed web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.'
        }
      ],
      education: [
        {
          id: 'edu-1',
          institution: 'University of Technology',
          degree: 'Bachelor of Science in Computer Science',
          year: '2019'
        }
      ],
      contact: {
        email: 'demo@profileai.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        linkedin: 'https://linkedin.com/in/demouser',
        github: 'https://github.com/demouser'
      }
    };

    this.profileSubject.next(demoProfile);
    localStorage.setItem('userProfile', JSON.stringify(demoProfile));
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

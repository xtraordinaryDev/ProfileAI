import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ResumeParseRequest {
  file?: File;
  fileUrl?: string;
}

export interface ResumeParseResponse {
  id: string;
  success: boolean;
  errorMessage?: string;
  data?: ParsedResumeData;
}

export interface ParsedResumeData {
  name?: string;
  contact?: ContactInfo;
  summary?: string;
  education: Education[];
  employment: Employment[];
  skills: string[];
  certifications: Certification[];
  rawText?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  linkedIn?: string;
  website?: string;
}

export interface Education {
  institution?: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  grade?: string;
}

export interface Employment {
  company?: string;
  title?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
}

export interface Certification {
  name?: string;
  issuer?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
}

export interface ResumeEnrichRequest {
  resumeId?: string;
  data?: ParsedResumeData;
}

export interface ResumeEnrichResponse {
  success: boolean;
  errorMessage?: string;
  data?: EnrichedResumeData;
}

export interface EnrichedResumeData {
  original?: ParsedResumeData;
  normalizedSkills: string[];
  inferredSkills: string[];
  normalizedEmployment: NormalizedEmployment[];
  employmentTimeline?: Timeline;
  summary?: CandidateSummary;
  seniority?: SeniorityLevel;
  skillCategories?: SkillCategories;
  salaryExpectation?: SalaryRange;
}

export interface NormalizedEmployment {
  company?: string;
  originalTitle?: string;
  normalizedTitle?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
}

export interface Timeline {
  entries: TimelineEntry[];
  gaps: TimelineGap[];
}

export interface TimelineEntry {
  type?: string;
  title?: string;
  organization?: string;
  startDate?: Date;
  endDate?: Date;
  isCurrent: boolean;
}

export interface TimelineGap {
  startDate?: Date;
  endDate?: Date;
  days: number;
  reason?: string;
}

export interface CandidateSummary {
  professionalSummary?: string;
  keyStrengths?: string;
  careerHighlights?: string;
}

export interface SeniorityLevel {
  level?: string;
  confidence?: number;
  reasoning?: string;
}

export interface SkillCategories {
  technical: string[];
  soft: string[];
  domain: string[];
  tools: string[];
}

export interface SalaryRange {
  min?: number;
  max?: number;
  currency?: string;
  period?: string;
  reasoning?: string;
}

export interface StructuredResumeResponse {
  id: string;
  parsed?: ParsedResumeData;
  enriched?: EnrichedResumeData;
  createdAt: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeIntelligenceService {
  private readonly apiUrl = `${environment.apiUrl}/resume-intelligence`;

  constructor(private http: HttpClient) {}

  parseResume(file?: File, fileUrl?: string): Observable<ResumeParseResponse> {
    const formData = new FormData();
    
    if (file) {
      formData.append('file', file);
    }
    
    if (fileUrl) {
      formData.append('fileUrl', fileUrl);
    }

    return this.http.post<ResumeParseResponse>(`${this.apiUrl}/parse`, formData);
  }

  enrichResume(resumeId?: string, data?: ParsedResumeData): Observable<ResumeEnrichResponse> {
    const request: ResumeEnrichRequest = {
      resumeId,
      data
    };

    return this.http.post<ResumeEnrichResponse>(`${this.apiUrl}/enrich`, request);
  }

  getStructuredResume(id: string): Observable<StructuredResumeResponse> {
    return this.http.get<StructuredResumeResponse>(`${this.apiUrl}/structured/${id}`);
  }
}


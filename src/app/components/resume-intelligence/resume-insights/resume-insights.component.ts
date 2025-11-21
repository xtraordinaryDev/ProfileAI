import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { ResumeIntelligenceService, EnrichedResumeData, ParsedResumeData } from '../../../services/resume-intelligence.service';

@Component({
  selector: 'app-resume-insights',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  templateUrl: './resume-insights.component.html',
  styleUrl: './resume-insights.component.scss'
})
export class ResumeInsightsComponent implements OnInit {
  @Input() resumeId?: string;
  @Input() resumeData?: ParsedResumeData;

  enrichedData?: EnrichedResumeData;
  isEnriching = false;
  error?: string;

  panelOpenState = {
    summary: true,
    seniority: true,
    skills: true,
    timeline: false,
    salary: false
  };

  constructor(private resumeService: ResumeIntelligenceService) {}

  ngOnInit(): void {
    if (this.resumeId || this.resumeData) {
      this.enrichResume();
    }
  }

  enrichResume(): void {
    this.isEnriching = true;
    this.error = undefined;

    this.resumeService.enrichResume(this.resumeId, this.resumeData).subscribe({
      next: (response) => {
        this.isEnriching = false;
        if (response.success && response.data) {
          this.enrichedData = response.data;
        } else {
          this.error = response.errorMessage || 'Failed to enrich resume';
        }
      },
      error: (err) => {
        this.isEnriching = false;
        this.error = err.error?.errorMessage || 'An error occurred while enriching the resume';
      }
    });
  }

  getSeniorityColor(level?: string): string {
    switch (level?.toLowerCase()) {
      case 'executive': return '#dc2626';
      case 'senior': return '#ea580c';
      case 'mid': return '#3b82f6';
      case 'entry': return '#10b981';
      default: return '#6b7280';
    }
  }
}

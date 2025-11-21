import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ParsedResumeData } from '../../../services/resume-intelligence.service';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.scss'
})
export class ResumePreviewComponent {
  @Input() resumeData?: ParsedResumeData;

  panelOpenState = {
    contact: false,
    summary: false,
    education: true,
    employment: true,
    skills: true,
    certifications: false
  };
}

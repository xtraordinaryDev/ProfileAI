import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ResumeIntelligenceService, ResumeParseResponse } from '../../../services/resume-intelligence.service';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './resume-upload.component.html',
  styleUrl: './resume-upload.component.scss'
})
export class ResumeUploadComponent {
  @Output() resumeParsed = new EventEmitter<ResumeParseResponse>();
  @Output() error = new EventEmitter<string>();

  selectedFile: File | null = null;
  fileUrl: string = '';
  isUploading = false;
  uploadProgress = 0;
  dragOver = false;

  acceptedFormats = ['.pdf', '.docx', '.doc', '.txt', '.jpg', '.jpeg', '.png', '.gif'];
  maxFileSize = 10 * 1024 * 1024; // 10MB

  constructor(private resumeService: ResumeIntelligenceService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  handleFile(file: File): void {
    // Validate file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!this.acceptedFormats.includes(fileExtension)) {
      this.error.emit(`Invalid file type. Accepted formats: ${this.acceptedFormats.join(', ')}`);
      return;
    }

    // Validate file size
    if (file.size > this.maxFileSize) {
      this.error.emit(`File size exceeds ${this.maxFileSize / (1024 * 1024)}MB limit`);
      return;
    }

    this.selectedFile = file;
    this.fileUrl = '';
  }

  onUrlInput(): void {
    if (this.fileUrl) {
      this.selectedFile = null;
    }
  }

  uploadResume(): void {
    if (!this.selectedFile && !this.fileUrl) {
      this.error.emit('Please select a file or enter a URL');
      return;
    }

    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate progress
    const progressInterval = setInterval(() => {
      if (this.uploadProgress < 90) {
        this.uploadProgress += 10;
      }
    }, 200);

    this.resumeService.parseResume(this.selectedFile || undefined, this.fileUrl || undefined).subscribe({
      next: (response) => {
        clearInterval(progressInterval);
        this.uploadProgress = 100;
        this.isUploading = false;
        
        if (response.success) {
          this.resumeParsed.emit(response);
          this.reset();
        } else {
          this.error.emit(response.errorMessage || 'Failed to parse resume');
        }
      },
      error: (err) => {
        clearInterval(progressInterval);
        this.isUploading = false;
        this.uploadProgress = 0;
        this.error.emit(err.error?.errorMessage || 'An error occurred while parsing the resume');
      }
    });
  }

  removeFile(): void {
    this.selectedFile = null;
    this.fileUrl = '';
  }

  reset(): void {
    this.selectedFile = null;
    this.fileUrl = '';
    this.uploadProgress = 0;
  }

  getFileSize(size: number): string {
    if (size < 1024) return size + ' B';
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  }
}

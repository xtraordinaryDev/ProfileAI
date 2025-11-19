import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ChatService, Message } from '../../services/chat.service';
import { CandidateFinderService, CandidateResult } from '../../services/candidate-finder.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  
  // Tab management
  activeTab: 'searcher' | 'finder' = 'searcher';
  
  // Chat/Profile AI Searcher properties
  messages: Message[] = [];
  messageText = '';
  isTyping = false;
  isApiCallInProgress = false;
  progressPercentage = 0;
  estimatedTimeRemaining = 0;
  currentStep = '';
  trialStatus = { remaining: 0, expired: false, hasSubscription: false };
  private messagesSubscription?: Subscription;
  private progressInterval?: any;

  // Candidate Finder properties
  candidateSearchQuery = '';
  candidateResults: CandidateResult[] = [];
  isSearching = false;
  hasSearched = false;
  lastSearchQuery = '';
  loadingStep = 0;
  private loadingStepInterval?: any;

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private router: Router,
    private candidateFinderService: CandidateFinderService
  ) {}

  ngOnInit(): void {
    this.messagesSubscription = this.chatService.messages$.subscribe(messages => {
      this.messages = messages;
      setTimeout(() => this.scrollToBottom(), 100);
    });

    // Listen for API call completion
    this.chatService.apiCallComplete$.subscribe(() => {
      this.stopProgressSimulation();
    });

    // Update trial status
    this.updateTrialStatus();
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    if (this.loadingStepInterval) {
      clearInterval(this.loadingStepInterval);
    }
  }

  switchTab(tab: 'searcher' | 'finder'): void {
    this.activeTab = tab;
  }

  sendMessage(): void {
    if (this.messageText.trim() && !this.isTyping && !this.isApiCallInProgress) {
      // Check trial limits before sending
      if (!this.authService.canUseTrial()) {
        this.showTrialLimitModal();
        return;
      }

      const message = this.messageText.trim();
      this.messageText = '';
      this.adjustTextareaHeight();
      
      this.isApiCallInProgress = true;
      this.progressPercentage = 0;
      this.estimatedTimeRemaining = 60; // 1 minute estimated
      this.currentStep = 'Initializing research...';
      
      // Start progress simulation
      this.startProgressSimulation();
      
      this.chatService.sendMessage(message);
      this.isTyping = true;
      
      // Update trial status after sending
      this.updateTrialStatus();
    }
  }

  private startProgressSimulation(): void {
    const steps = [
      { step: 'Initializing research...', duration: 10 }, // 10 seconds
      { step: 'Gathering LinkedIn data...', duration: 12 }, // 12 seconds
      { step: 'Analyzing company information...', duration: 15 }, // 15 seconds
      { step: 'Searching for opportunities...', duration: 13 }, // 13 seconds
      { step: 'Generating comprehensive report...', duration: 8 }, // 8 seconds
      { step: 'Finalizing results...', duration: 2 } // 2 seconds
    ];

    let currentStepIndex = 0;
    let stepElapsedTime = 0;
    let totalElapsedTime = 0;
    const totalTime = 60; // 60 seconds total

    this.progressInterval = setInterval(() => {
      if (currentStepIndex < steps.length) {
        this.currentStep = steps[currentStepIndex].step;
        this.progressPercentage = Math.min(95, (totalElapsedTime / totalTime) * 100);
        this.estimatedTimeRemaining = Math.max(0, totalTime - totalElapsedTime);
        
        stepElapsedTime++;
        totalElapsedTime++;
        
        // Move to next step when current step duration is reached
        if (stepElapsedTime >= steps[currentStepIndex].duration) {
          currentStepIndex++;
          stepElapsedTime = 0;
        }
      }
    }, 1000);
  }

  private stopProgressSimulation(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
    this.progressPercentage = 100;
    this.estimatedTimeRemaining = 0;
    this.currentStep = 'Research complete!';
    
    // Reset after a short delay
    setTimeout(() => {
      this.isTyping = false;
      this.isApiCallInProgress = false;
      this.progressPercentage = 0;
      this.currentStep = '';
    }, 2000);
  }

  onEnterKey(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  adjustTextareaHeight(): void {
    if (this.messageInput?.nativeElement) {
      const textarea = this.messageInput.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }

  adjustSearchTextareaHeight(): void {
    if (this.searchInput?.nativeElement) {
      const textarea = this.searchInput.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }

  onSearchEnterKey(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) {
      event.preventDefault();
      this.searchCandidates();
    }
  }

  searchCandidates(): void {
    if (!this.candidateSearchQuery.trim() || this.isSearching) {
      return;
    }

    const query = this.candidateSearchQuery.trim();
    this.lastSearchQuery = query;
    this.candidateSearchQuery = '';
    this.adjustSearchTextareaHeight();
    this.isSearching = true;
    this.hasSearched = true;
    this.candidateResults = [];
    this.loadingStep = 0;

    // Start loading animation
    this.startLoadingAnimation();

    this.candidateFinderService.searchCandidates(query).subscribe({
      next: (response) => {
        this.stopLoadingAnimation();
        this.isSearching = false;
        
        if (response.ok && response.results && response.results.length > 0) {
          this.candidateResults = response.results;
        } else {
          this.candidateResults = [];
        }
      },
      error: (error) => {
        console.error('Error searching candidates:', error);
        this.stopLoadingAnimation();
        this.isSearching = false;
        this.candidateResults = [];
      }
    });
  }

  private startLoadingAnimation(): void {
    this.loadingStep = 0;
    this.loadingStepInterval = setInterval(() => {
      this.loadingStep++;
      if (this.loadingStep > 4) {
        this.loadingStep = 1; // Loop back
      }
    }, 800);
  }

  private stopLoadingAnimation(): void {
    if (this.loadingStepInterval) {
      clearInterval(this.loadingStepInterval);
      this.loadingStepInterval = undefined;
    }
    this.loadingStep = 4; // Show all steps as complete
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2U1ZTdlYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
  }

  scrollToBottom(): void {
    if (this.messagesContainer) {
      const element = this.messagesContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    } else {
      return `${remainingSeconds}s`;
    }
  }

  updateTrialStatus(): void {
    this.trialStatus = this.authService.getTrialStatus();
  }

  showTrialLimitModal(): void {
    // For now, we'll show an alert. In a real app, you'd show a proper modal
    const trialStatus = this.authService.getTrialStatus();
    if (trialStatus.expired) {
      alert('Your trial period has expired. Please subscribe to continue using ProFile AI.');
    } else {
      alert(`You've used all your free trials. Please subscribe to continue using ProFile AI.`);
    }
    this.router.navigate(['/subscription']);
  }

  getTrialStatusText(): string {
    if (this.trialStatus.hasSubscription) {
      return 'Unlimited';
    } else if (this.trialStatus.expired) {
      return 'Expired';
    } else {
      return `${this.trialStatus.remaining} remaining`;
    }
  }

  getTrialStatusClass(): string {
    if (this.trialStatus.hasSubscription) {
      return 'trial-unlimited';
    } else if (this.trialStatus.expired || this.trialStatus.remaining === 0) {
      return 'trial-expired';
    } else if (this.trialStatus.remaining <= 2) {
      return 'trial-warning';
    } else {
      return 'trial-ok';
    }
  }

  downloadHtmlReport(htmlContent: string, timestamp: Date): void {
    try {
      // Create a complete HTML document with proper styling
      const completeHtml = this.createCompleteHtmlDocument(htmlContent);
      
      // Create blob with the HTML content
      const blob = new Blob([completeHtml], { type: 'text/html' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Generate filename with timestamp
      const dateStr = timestamp.toISOString().split('T')[0];
      const timeStr = timestamp.toTimeString().split(' ')[0].replace(/:/g, '-');
      link.download = `profile-research-report-${dateStr}-${timeStr}.html`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('HTML report downloaded successfully');
    } catch (error) {
      console.error('Error downloading HTML report:', error);
      // You could show a user-friendly error message here
    }
  }

  downloadPdfReport(htmlContent: string, timestamp: Date): void {
    try {
      // Create a complete HTML document optimized for PDF
      const completeHtml = this.createPdfOptimizedHtmlDocument(htmlContent);
      
      // Open in new window for printing
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        throw new Error('Unable to open print window. Please check your popup blocker settings.');
      }
      
      printWindow.document.write(completeHtml);
      printWindow.document.close();
      
      // Wait for content to load, then trigger print dialog
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          // Close the window after printing (or user cancels)
          setTimeout(() => {
            printWindow.close();
          }, 1000);
        }, 500);
      };
      
      console.log('PDF generation initiated');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: show user-friendly error message
      alert('Unable to generate PDF. Please try downloading as HTML instead, or check your browser settings.');
    }
  }

  private createPdfOptimizedHtmlDocument(htmlContent: string): string {
    // Extract the content between <body> tags if it exists, otherwise use the full content
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Research Report</title>
    <style>
        @page {
            margin: 0.5in;
            size: A4;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.4;
            color: #000000;
            font-size: 12px;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin: 0 0 8px 0;
            font-weight: 600;
            color: #000000;
            page-break-after: avoid;
        }
        
        h1 { 
            font-size: 18px; 
            margin-bottom: 12px;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 4px;
        }
        h2 { 
            font-size: 16px; 
            margin-top: 16px;
            margin-bottom: 8px;
        }
        h3 { font-size: 14px; }
        h4 { font-size: 13px; }
        h5 { font-size: 12px; }
        h6 { font-size: 11px; }
        
        p {
            margin: 0 0 8px 0;
            line-height: 1.4;
            color: #000000;
            text-align: justify;
        }
        
        ul, ol {
            margin: 0 0 12px 0;
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 4px;
            line-height: 1.4;
            color: #000000;
        }
        
        a {
            color: #3b82f6;
            text-decoration: none;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
            background: #ffffff;
            page-break-inside: avoid;
            font-size: 11px;
        }
        
        th, td {
            padding: 8px 10px;
            text-align: left;
            border: 1px solid #000000;
            vertical-align: top;
        }
        
        th {
            background: #f0f0f0;
            color: #000000;
            font-weight: 600;
        }
        
        td {
            color: #000000;
        }
        
        img {
            max-width: 100%;
            height: auto;
            margin: 8px 0;
            page-break-inside: avoid;
        }
        
        .header-images {
            display: flex;
            gap: 20px;
            margin: 16px 0;
            justify-content: center;
            align-items: center;
            page-break-inside: avoid;
        }
        
        .header-images img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border: 2px solid #000000;
        }
        
        .section {
            margin-bottom: 20px;
            padding: 16px;
            background: #ffffff;
            border: 1px solid #cccccc;
            page-break-inside: avoid;
        }
        
        .profile-details {
            background: #ffffff;
            padding: 16px;
            margin: 16px 0;
            border: 1px solid #cccccc;
            page-break-inside: avoid;
        }
        
        .profile-details p {
            margin: 8px 0;
            font-size: 11px;
            line-height: 1.4;
            color: #000000;
        }
        
        .profile-details strong {
            color: #000000;
            font-weight: 700;
        }
        
        .card, .review-card {
            background: #ffffff;
            border: 1px solid #cccccc;
            padding: 12px;
            margin: 8px 0;
            page-break-inside: avoid;
            color: #000000;
        }
        
        code {
            background-color: #f0f0f0;
            padding: 2px 4px;
            font-family: 'Courier New', monospace;
            font-size: 10px;
            color: #000000;
        }
        
        pre {
            background-color: #f0f0f0;
            padding: 12px;
            margin: 12px 0;
            border: 1px solid #cccccc;
            page-break-inside: avoid;
            font-size: 10px;
        }
        
        blockquote {
            border-left: 3px solid #3b82f6;
            margin: 12px 0;
            padding: 8px 12px;
            background: #f8f8f8;
            color: #000000;
            page-break-inside: avoid;
        }
        
        .citations {
            margin-top: 20px;
            padding: 16px;
            background: #ffffff;
            border: 1px solid #cccccc;
            page-break-inside: avoid;
        }
        
        .citations h2 {
            color: #3b82f6;
            margin-bottom: 12px;
            font-size: 14px;
        }
        
        .citations ul {
            margin: 0;
            padding-left: 16px;
            columns: 1;
        }
        
        .citations li {
            margin-bottom: 6px;
            font-size: 10px;
            color: #000000;
        }
        
        .citations a {
            color: #3b82f6;
            text-decoration: none;
        }
        
        /* Print-specific styles */
        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            .section {
                break-inside: avoid;
                margin-bottom: 16px;
            }
            
            table {
                break-inside: avoid;
            }
            
            .header-images {
                break-inside: avoid;
            }
            
            h1, h2, h3, h4, h5, h6 {
                break-after: avoid;
            }
        }
    </style>
</head>
<body>
    ${bodyContent}
</body>
</html>`;
  }

  private createCompleteHtmlDocument(htmlContent: string): string {
    // Extract the content between <body> tags if it exists, otherwise use the full content
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Research Report</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #374151;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin: 0 0 12px 0;
            font-weight: 600;
            color: #1e293b;
        }
        
        h1 { font-size: 24px; }
        h2 { font-size: 20px; }
        h3 { font-size: 18px; }
        h4 { font-size: 16px; }
        h5 { font-size: 14px; }
        h6 { font-size: 12px; }
        
        p {
            margin: 0 0 12px 0;
            line-height: 1.6;
            color: #374151;
        }
        
        ul, ol {
            margin: 0 0 16px 0;
            padding-left: 28px;
        }
        
        li {
            margin-bottom: 8px;
            line-height: 1.6;
            color: #374151;
        }
        
        a {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e5e7eb;
        }
        
        th, td {
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
            vertical-align: top;
        }
        
        th {
            background: #f3f4f6;
            color: #374151;
            font-weight: 600;
        }
        
        td {
            color: #374151;
        }
        
        tr:hover {
            background: #f9fafb;
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            margin: 8px 0;
        }
        
        .header-images {
            display: flex;
            gap: 20px;
            margin: 20px 0;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        
        .header-images img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            border: 3px solid #fff;
        }
        
        .section {
            margin-bottom: 24px;
            padding: 24px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e5e7eb;
        }
        
        .profile-details {
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            border: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .profile-details p {
            margin: 12px 0;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
        }
        
        .profile-details strong {
            color: #3b82f6;
            font-weight: 700;
        }
        
        .card, .review-card {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            margin: 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            color: #374151;
        }
        
        code {
            background-color: #f3f4f6;
            padding: 4px 8px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #d63384;
        }
        
        pre {
            background-color: #f3f4f6;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 16px 0;
            border: 1px solid #e5e7eb;
        }
        
        blockquote {
            border-left: 4px solid #3b82f6;
            margin: 16px 0;
            padding: 16px 20px;
            background: #f3f4f6;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: #6b7280;
        }
        
        .citations {
            margin-top: 24px;
            padding: 20px;
            background: #ffffff;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
        }
        
        .citations h2 {
            color: #3b82f6;
            margin-bottom: 16px;
            font-size: 18px;
        }
        
        .citations ul {
            margin: 0;
            padding-left: 20px;
            columns: 2;
            column-gap: 20px;
        }
        
        .citations li {
            margin-bottom: 8px;
            font-size: 13px;
            break-inside: avoid;
            color: #374151;
        }
        
        .citations a {
            color: #3b82f6;
            text-decoration: none;
        }
        
        .citations a:hover {
            text-decoration: underline;
        }
        
        @media print {
            body {
                padding: 0;
            }
            
            .section {
                break-inside: avoid;
                margin-bottom: 20px;
            }
            
            table {
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    ${bodyContent}
</body>
</html>`;
  }
}

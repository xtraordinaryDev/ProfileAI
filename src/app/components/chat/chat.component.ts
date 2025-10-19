import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ChatService, Message } from '../../services/chat.service';

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
  
  messages: Message[] = [];
  messageText = '';
  isTyping = false;
  isApiCallInProgress = false;
  progressPercentage = 0;
  estimatedTimeRemaining = 0;
  currentStep = '';
  private messagesSubscription?: Subscription;
  private progressInterval?: any;

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private router: Router
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
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  sendMessage(): void {
    if (this.messageText.trim() && !this.isTyping && !this.isApiCallInProgress) {
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
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isHtml?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  public messages$ = this.messagesSubject.asObservable();
  
  private apiCallCompleteSubject = new Subject<void>();
  public apiCallComplete$ = this.apiCallCompleteSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initialize with welcome message
    this.addMessage('Hello! I\'m ProFile AI. I can help you build your professional profile. What would you like to know about yourself?', false);
  }

  addMessage(text: string, isUser: boolean, isHtml: boolean = false): void {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
      isHtml
    };
    
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, message]);
  }

  sendMessage(text: string): void {
    this.addMessage(text, true);
    
    // Call the lead research endpoint with the user's message
    this.callLeadResearchEndpoint(text).subscribe({
      next: (response: any) => {
        console.log('Raw response:', response);
        
        // Handle both string and object responses
        let htmlContent = '';
        if (typeof response === 'string') {
          htmlContent = response;
        } else if (response && response.html) {
          htmlContent = response.html;
        } else if (response && typeof response === 'object') {
          // Try to extract HTML from various possible response formats
          htmlContent = response.html || response.data || response.content || response.result || JSON.stringify(response, null, 2);
        } else {
          htmlContent = JSON.stringify(response, null, 2);
        }
        
        // Decode escaped HTML characters
        htmlContent = this.decodeHtmlContent(htmlContent);
        
        // Clean up the HTML content
        htmlContent = this.cleanHtmlContent(htmlContent);
        
        console.log('Processed HTML content:', htmlContent);
        
        // Add the HTML response as a message
        this.addMessage(htmlContent, false, true);
        
        // Notify that API call is complete
        this.apiCallCompleteSubject.next();
      },
      error: (error) => {
        console.error('Error calling lead research endpoint:', error);
        
        // If JSON parsing failed, try with text response
        if (error.status === 0 || error.message?.includes('JSON')) {
          console.log('JSON parsing failed, trying text response...');
          this.http.post('https://xtraordinary.app.n8n.cloud/webhook-test/lead-research', { message: text }, { 
            responseType: 'text'
          }).pipe(timeout(300000)).subscribe({
            next: (textResponse: string) => {
              console.log('Text response:', textResponse);
              let htmlContent = this.decodeHtmlContent(textResponse);
              htmlContent = this.cleanHtmlContent(htmlContent);
              this.addMessage(htmlContent, false, true);
              this.apiCallCompleteSubject.next();
            },
            error: (textError) => {
              this.handleApiError(textError);
            }
          });
          return;
        }
        
        this.handleApiError(error);
      }
    });
  }

  private handleApiError(error: any): void {
    let errorMessage = '';
    if (error.name === 'TimeoutError' || error.message?.includes('timeout')) {
      errorMessage = '⏰ The research request timed out after 5 minutes. The research process is taking longer than expected. Please try again with a more specific query or contact support if the issue persists.';
    } else if (error.status === 404) {
      errorMessage = '🔍 The research endpoint is currently unavailable. Please try again later or contact support.';
    } else if (error.status >= 500) {
      errorMessage = '⚠️ The research service is experiencing technical difficulties. Please try again in a few minutes.';
    } else {
      errorMessage = '❌ An unexpected error occurred during the research process. Please try again or contact support if the issue persists.';
    }
    
    this.addMessage(errorMessage, false);
    
    // Notify that API call is complete (even on error)
    this.apiCallCompleteSubject.next();
  }

  private decodeHtmlContent(html: string): string {
    // Decode escaped HTML characters
    return html
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\r/g, '\r')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, '\\')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }

  private cleanHtmlContent(html: string): string {
    // Fix image URLs and clean up the HTML
    return html
      .replace(/src="undefined"/g, 'src=""')
      .replace(/href="undefined"/g, 'href="#"')
      .replace(/alt="undefined"/g, 'alt=""')
      .replace(/<img([^>]*)src="([^"]*)"([^>]*)>/g, (match, before, src, after) => {
        // Ensure images have proper attributes
        if (src && src !== 'undefined' && src !== '') {
          return `<img${before}src="${src}"${after} loading="lazy" style="max-width: 100%; height: auto;">`;
        }
        return match;
      });
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
  }

  callLeadResearchEndpoint(message: string): Observable<any> {
    const endpoint = 'https://xtraordinary.app.n8n.cloud/webhook-test/lead-research';
    const payload = {
      message: message
    };
    
    // Log the payload for debugging
    console.log('Sending payload to endpoint:', JSON.stringify(payload, null, 2));
    
    // Set timeout to 5 minutes (300000ms) for long-running research
    // Try JSON first, fallback to text if needed
    return this.http.post(endpoint, payload, { 
      responseType: 'json'
    }).pipe(
      // Add timeout handling
      timeout(300000) // 5 minutes timeout
    );
  }
}

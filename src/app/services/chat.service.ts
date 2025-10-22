import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { ConfigService } from './config.service';

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

  constructor(private http: HttpClient, private configService: ConfigService) {
    // Initialize with welcome message
    this.addMessage('Hello! I\'m ProFile AI. I can help you research and analyze professional profiles. To get started, please provide the person\'s first and last name, the business they work for, and their location. For example: "Research John Smith who works at Microsoft in Seattle, Washington"', false);
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

  private generateDemoResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    
    if (message.includes('profile') || message.includes('resume') || message.includes('cv') || message.includes('research')) {
      return `
        <div class="ai-response">
          <h3>📋 Profile Research & Analysis</h3>
          <p>I'll help you research and analyze professional profiles. Here's what I can provide:</p>
          
          <div class="recommendation-section">
            <h4>🔍 Research Capabilities</h4>
            <ul>
              <li><strong>LinkedIn Analysis:</strong> Deep dive into professional background and connections</li>
              <li><strong>Career Trajectory:</strong> Track career progression and key achievements</li>
              <li><strong>Skills Assessment:</strong> Evaluate technical and soft skills based on experience</li>
            </ul>
          </div>
          
          <div class="recommendation-section">
            <h4>📊 Analysis Features</h4>
            <ul>
              <li><strong>Market Position:</strong> Compare against industry standards and competitors</li>
              <li><strong>Opportunity Mapping:</strong> Identify potential career opportunities and growth areas</li>
              <li><strong>Network Analysis:</strong> Understand professional connections and influence</li>
            </ul>
          </div>
          
          <div class="recommendation-section">
            <h4>🚀 How to Search</h4>
            <p>To research someone, provide these details:</p>
            <ul>
              <li><strong>First and Last Name:</strong> The person's full name</li>
              <li><strong>Company/Business:</strong> Where they currently work</li>
              <li><strong>Location:</strong> City and state/country</li>
              <li><strong>Optional:</strong> Specific role or department</li>
            </ul>
            <p><strong>Example:</strong> "Research Sarah Johnson who works at Google in San Francisco, California"</p>
          </div>
        </div>
      `;
    } else if (message.includes('skill') || message.includes('technology')) {
      return `
        <div class="ai-response">
          <h3>🛠️ Skills Research & Analysis</h3>
          <p>I can analyze and research the technical skills and expertise of any professional:</p>
          
          <div class="skill-category">
            <h4>Technical Skills Assessment</h4>
            <div class="skill-tags">
              <span class="skill-tag primary">Programming Languages</span>
              <span class="skill-tag primary">Frameworks</span>
            </div>
            <p><strong>Analysis:</strong> Evaluate proficiency levels and market relevance</p>
          </div>
          
          <div class="skill-category">
            <h4>Industry Expertise</h4>
            <div class="skill-tags">
              <span class="skill-tag secondary">Domain Knowledge</span>
              <span class="skill-tag secondary">Certifications</span>
            </div>
            <p><strong>Research:</strong> Assess industry-specific knowledge and credentials</p>
          </div>
          
          <div class="skill-category">
            <h4>Emerging Technologies</h4>
            <div class="skill-tags">
              <span class="skill-tag accent">AI/ML</span>
              <span class="skill-tag accent">Cloud Platforms</span>
              <span class="skill-tag accent">DevOps</span>
            </div>
            <p><strong>Market Position:</strong> Compare against current industry trends</p>
          </div>
          
          <div class="recommendation">
            <h4>💡 Research Focus Areas</h4>
            <ul>
              <li>Identify <strong>core competencies</strong> and specializations</li>
              <li>Assess <strong>skill gaps</strong> and growth opportunities</li>
              <li>Compare against <strong>industry benchmarks</strong> and competitors</li>
            </ul>
          </div>
        </div>
      `;
    } else if (message.includes('career') || message.includes('job') || message.includes('opportunity')) {
      return `
        <div class="ai-response">
          <h3>🎯 Career Research & Opportunity Analysis</h3>
          <p>I can research and analyze career opportunities for any professional:</p>
          
          <div class="opportunity-card">
            <h4>🔍 Market Research</h4>
            <p><strong>Salary Analysis:</strong> Compare compensation against industry standards</p>
            <p><strong>Role Matching:</strong> Identify suitable positions based on skills and experience</p>
            <p><strong>Market Demand:</strong> Assess current job market trends and opportunities</p>
          </div>
          
          <div class="opportunity-card">
            <h4>📊 Career Trajectory Analysis</h4>
            <p><strong>Growth Potential:</strong> Evaluate upward mobility and career progression</p>
            <p><strong>Industry Trends:</strong> Research emerging roles and skill requirements</p>
            <p><strong>Competitive Position:</strong> Compare against similar professionals</p>
          </div>
          
          <div class="opportunity-card">
            <h4>💼 Company & Role Research</h4>
            <p><strong>Company Culture:</strong> Research work environment and values</p>
            <p><strong>Team Dynamics:</strong> Analyze reporting structure and collaboration</p>
            <p><strong>Growth Opportunities:</strong> Identify learning and development potential</p>
          </div>
          
          <div class="action-items">
            <h4>📋 Research Capabilities</h4>
            <ul>
              <li>LinkedIn profile analysis and network research</li>
              <li>Company background and culture assessment</li>
              <li>Industry trend analysis and market positioning</li>
            </ul>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="ai-response">
          <h3>🤖 ProFile AI Research Assistant</h3>
          <p>I'm here to help you research and analyze professional profiles! Here's what I can do for you:</p>
          
          <div class="help-sections">
            <div class="help-section">
              <h4>🔍 Profile Research</h4>
              <p>Deep dive into LinkedIn profiles, career history, and professional background</p>
            </div>
            
            <div class="help-section">
              <h4>🛠️ Skills Analysis</h4>
              <p>Evaluate technical skills, certifications, and expertise levels</p>
            </div>
            
            <div class="help-section">
              <h4>🎯 Career Research</h4>
              <p>Research career opportunities, market position, and industry trends</p>
            </div>
            
            <div class="help-section">
              <h4>💡 Market Intelligence</h4>
              <p>Provide insights on compensation, growth potential, and competitive landscape</p>
            </div>
          </div>
          
          <div class="sample-questions">
            <h4>💬 Try these search examples:</h4>
            <ul>
              <li>"Research John Smith who works at Microsoft in Seattle, Washington"</li>
              <li>"Find Sarah Johnson who works at Google in San Francisco, California"</li>
              <li>"Research Mike Chen who works at Amazon in Austin, Texas"</li>
              <li>"Look up Lisa Rodriguez who works at Apple in Cupertino, California"</li>
            </ul>
          </div>
        </div>
      `;
    }
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
    const endpoint = this.configService.profileResearchApiUrl;
    const payload = {
      message: message
    };
    
    // Log the payload for debugging
    console.log('Sending payload to endpoint:', JSON.stringify(payload, null, 2));
    console.log('Using profile research API:', endpoint);
    
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

export interface CandidateResult {
  name: string;
  title: string;
  raw_bio: string;
  bio: string;
  image_url: string;
  linkedin_url: string;
  confidence: number;
}

export interface CandidateSearchResponse {
  ok: boolean;
  status: number;
  results: CandidateResult[];
}

@Injectable({
  providedIn: 'root'
})
export class CandidateFinderService {
  private readonly apiUrl = 'https://xtraordinary.app.n8n.cloud/webhook-test/people-search-freeform';

  constructor(private http: HttpClient) {}

  searchCandidates(query: string): Observable<CandidateSearchResponse> {
    const payload = {
      message: query
    };

    return this.http.post<CandidateSearchResponse>(this.apiUrl, payload).pipe(
      timeout(60000) // 60 second timeout
    );
  }
}



import { Injectable } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { Observable, from, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = 'http://localhost:8080/api'; // Backend API URL
  private searchResults = new BehaviorSubject<string[]>([]);
  public searchResults$ = this.searchResults.asObservable();

  constructor() {}

  // search(query: string): Observable<string[]> {
  //   return from(
    search(query: string): void {
     from(
      axios
        .get<string[]>(`${this.baseUrl}/search?query=${query}`)
        .then((response) => response.data)
    ).pipe(
      catchError((error: AxiosError) => {
        console.error('Search error:', error);
        // Return an observable with the error message
        return throwError(() => new Error('Search failed. Please try again later.'));
      })
    )
    .subscribe({
      next: (results) => {
        this.searchResults.next(results); // Update BehaviorSubject with the results
      },
      error: (error) => {
        this.searchResults.next([]); // Clear results or handle empty state on error
      },
  });
}}

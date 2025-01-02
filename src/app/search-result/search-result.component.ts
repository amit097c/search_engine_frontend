import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf,*ngFor
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-result',
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent 
 {
    results: string[] = [];
    errorMessage: string | null = null;
    constructor(private searchService: SearchService, private route: ActivatedRoute) {}
    ngOnInit(): void {
      //Subscribe to searchResults$ to get updates
      this.searchService.searchResults$.subscribe({
        next: (results) => {
          this.results = results; // Update the results when they change
        },
        error: (error) => {
          this.errorMessage = error.message; // Handle error
        },
      });
      
    }
   
 }

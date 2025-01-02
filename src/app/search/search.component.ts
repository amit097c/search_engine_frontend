import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { SearchResultComponent } from '../search-result/search-result.component'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  imports: [FormsModule,CommonModule,SearchResultComponent],
  styleUrls: ['./search.component.css'],
})
export class SearchComponent
 {
  query: string = '';
  results: string[] = [];
  suggestion: string | null = null;

  constructor(private searchService: SearchService,private router: Router) {}

  performSearch(): void
   {
    if (!this.query.trim())
       {
         this.results = [];
         this.suggestion = null;
         return;
       }
    if (this.query.trim())
          {
           console.log(this.query); 
           this.searchService.search(this.query); // Trigger search service
           this.router.navigate(['/search-result']);
          }

    // Fetch search results
    // this.searchService.search(this.query).subscribe((data) =>
    //    {
    //      this.results = data;
    //    });

    // Fetch spellcheck suggestion
    // this.searchService.spellCheck(this.query).subscribe((data) =>
    //    {
    //      this.suggestion = data;
    //    });
  }

  // onSearch(): void {
  //   if (this.query.trim()) {
  //     this.searchService.search(this.query); // Trigger search service
  //   }
  // }

  applySuggestion(): void
   {
    if (this.suggestion)
       {
         this.query = this.suggestion;
         this.performSearch();
       }
   }
}

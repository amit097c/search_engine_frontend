import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent);
// @NgModule({
  
//   imports: [BrowserModule, AppComponent,AppRoutingModule, HttpClientModule, FormsModule],
//   providers: [],
  

// })

// export class AppModule {}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    FormsModule
  ]
});
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './components/profile/profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    //ProfileComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    BrowserAnimationsModule
    
  ],
  exports: [

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

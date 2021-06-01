import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth/auth.service';
import { AdminComponent } from './components/admin/admin.component';
import { LandingModule } from './components/landing/landing.module';
import { LandingRoutingModule } from './components/landing/landing.routing';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    AdminComponent,
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
    HomeModule,
    SharedModule,
    AuthModule,
    LandingModule,
    LandingRoutingModule
    
  ],
  exports: [

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeModule } from './home/home.module';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from './shared/shared.module';
import { CourseComponent } from './components/courses/course/course.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    CoursesComponent,
    CourseComponent,
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
    AuthModule
    
  ],
  exports: [

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

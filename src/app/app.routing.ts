import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/courses/course/course.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent }, //HomeComponent
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  
  //Ruta para ver
  { path: 'test', component: HomeComponent },

  { path: 'courses',
    children: [
      { path: 'all', component: CoursesComponent },
      { path: ':id', component: CourseComponent }
    ] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

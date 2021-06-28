import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule)
  },

  {
    path: 'admin-panel',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },

/*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'admin-panel', component: AdminComponent },

  { path: 'test', component: HomeComponent },*/

];

@NgModule({
  imports: [
    CommonModule,
    //BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

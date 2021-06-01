import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent }, //HomeComponent
  { path: 'profile', component: ProfileComponent }, 
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  
  //Ruta para ver
  { path: 'test', component: HomeComponent },

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

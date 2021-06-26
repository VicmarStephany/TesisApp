import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
})
export class AuthRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [
    SignupComponent,    
    LoginComponent
  ],
  imports: [
    CommonModule,
    //BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    SignupComponent,    
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

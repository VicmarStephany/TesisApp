import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'user-panel',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
/* {
    path: 'personal', 
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
    //canActivate: 
  },
  */ 
  { path: 'test', component: HomeComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

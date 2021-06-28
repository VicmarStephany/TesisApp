import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin-panel', component: AdminComponent}

];

@NgModule({
  imports: [
    CommonModule,
    //BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
})
export class AdminRoutingModule { }

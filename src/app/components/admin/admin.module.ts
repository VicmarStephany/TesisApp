import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]},

];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class AdminModule { }

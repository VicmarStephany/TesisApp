import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ContactComponent } from './contact/contact.component';
import { InformationBoardComponent } from './information-board/information-board.component';
import { InstitutionComponent } from './institution/institution.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { LandingComponent } from './landing.component';
import { MainComponent } from './main/main.component';
import { LandingRoutingModule } from './landing.routing';

const routesL: Routes = [

  { path: '', component: MainComponent},
  { path: 'courses/all', component: InformationBoardComponent},
  { path: 'courses/:id', component: InformationBoardComponent},
  { path: 'info-board', component: InformationBoardComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'institution', component: InstitutionComponent},
];


@NgModule({
  declarations: [
    LandingComponent,
    CoursesComponent,
    CourseComponent,
    ContactComponent,
    InformationBoardComponent,
    InstitutionComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    //BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //AppRoutingModule,
    SharedModule,
    AuthModule,
    RouterModule.forChild(routesL),    
  ]
})
export class LandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { InformationBoardComponent } from './information-board/information-board.component';
import { ContactComponent } from './contact/contact.component';
import { InstitutionComponent } from './institution/institution.component';
import { MainComponent } from './main/main.component';


const routesL: Routes = [

  { path: 'main', component: MainComponent},
  //{ path: 'landing',  },
    
  { path: 'courses',
    children: [
      { path: 'all', component: CoursesComponent },
      { path: ':id', component: CourseComponent }
    ] 
  },
  { path: 'info-board', component: InformationBoardComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'institution', component: InstitutionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    //BrowserModule,
    RouterModule.forChild(routesL)
  ],
  exports: [
  ],
})
export class LandingRoutingModule { }

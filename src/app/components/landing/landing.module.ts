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
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { LandingComponent } from './landing.component';
import { MainComponent } from './main/main.component';

const routesL: Routes = [

  {
    path: '', component: LandingComponent,
    children: [

      { path: 'home', component: MainComponent },
      { path: 'courses/all', component: CoursesComponent },
      { path: 'courses/:id', component: CourseComponent },
      { path: 'info-board', component: InformationBoardComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'institution', component: InstitutionComponent },
    ]
  },

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
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    RouterModule.forChild(routesL),
  ]
})
export class LandingModule { }

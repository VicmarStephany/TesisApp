import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AcademicDataComponent } from './student/academic-data/academic-data.component';
import { PaymentComponent } from './student/payment/payment.component';
import { OffersComponent } from './coordinator/offers/offers.component';
import { StudentsComponent } from './coordinator/students/students.component';
import { PaymentsComponent } from './coordinator/payments/payments.component';
import { NotesComponent } from './coordinator/notes/notes.component';
import { OfferEditComponent } from './coordinator/offers/offer-edit/offer-edit.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './admin/users/users.component';
import { VclassroomComponent } from './admin/vclassroom/vclassroom.component';
import { UserRoleComponent } from './admin/user-role/user-role.component';
import { ReportComponent } from './coordinator/notes/report/report.component';
import { CreateActaComponent } from './professor/create-acta/create-acta.component';
import { VirtualClassroomComponent } from './professor/virtual-classroom/virtual-classroom.component';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';
import { ModalComponent } from './admin/user-role/modal/modal.component';
import { AdminGuard } from 'src/app/auth/guard/admin.guard';
import { ProfeGuard } from 'src/app/auth/guard/profe.guard';
import { StudentGuard } from 'src/app/auth/guard/student.guard';
import { CoordGuard } from 'src/app/auth/guard/coord.guard';
import { SectionsModule } from 'src/app/sections/sections.module';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: UserComponent,
    children: [ 
      { path: 'profile', component: ProfileComponent},//listo
      { path: 'settings', component: SettingsComponent},//listo

      // Students routes
      { path: 'dashboard', component: DashboardComponent, canActivate: [StudentGuard]},//listo
      { path: 'academic', component: AcademicDataComponent, canActivate: [StudentGuard]},//listo
      { path: 'payment', component: PaymentComponent, canActivate: [StudentGuard]},//listo

      // Coord Routes
      { path: 'offers', component: OffersComponent, canActivate: [CoordGuard]},//listo
      { path: 'offers/create', component: OfferEditComponent, canActivate: [CoordGuard]},//Listo
      { path: 'offers/edit/:id', component: OfferEditComponent, canActivate: [CoordGuard]},//Listo
      { path: 'c-students', component: StudentsComponent, canActivate: [CoordGuard]},//listo
      { path: 'c-notes', component: NotesComponent, canActivate: [CoordGuard]},
      { path: 'c-notes/report/:id', component: ReportComponent, canActivate: [CoordGuard]},
      { path: 'c-notes/create', component: CreateActaComponent, canActivate: [CoordGuard]},
      
      //Admin routes
      { path: 'a-users', component: UsersComponent, canActivate: [AdminGuard]},
      { path: 'a-v-classroom', component: VclassroomComponent, canActivate: [AdminGuard]},//falta
      { path: 'a-user-role', component: UserRoleComponent, canActivate: [AdminGuard]},
      { path: 'a-payments', component: PaymentsComponent, canActivate: [AdminGuard]},//Listo

      //Profesor routes
      { path: 'notes', component: NotesComponent, canActivate: [ProfeGuard]},
      { path: 'notes/report/:id', component: ReportComponent, canActivate: [ProfeGuard]},
      { path: 'notes/create', component: CreateActaComponent, canActivate: [ProfeGuard]},
      { path: 'virtual-classroom', component: VirtualClassroomComponent},
      { path: 'students', component: StudentsComponent, canActivate: [ProfeGuard]},

    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    AcademicDataComponent,
    PaymentComponent,
    ProfileComponent,
    OffersComponent,
    StudentsComponent,
    PaymentsComponent,
    NotesComponent,
    OfferEditComponent,
    SettingsComponent,
    UsersComponent,
    UserRoleComponent,
    ReportComponent,
    CreateActaComponent,
    VirtualClassroomComponent,
    VclassroomComponent,
    ModalComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    NgxSpinnerModule,
    SectionsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class UserModule { }

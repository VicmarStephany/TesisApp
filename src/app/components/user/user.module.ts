import { NgModule } from '@angular/core';
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

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: UserComponent,
    children: [
      // Students routes
      { path: 'dashboard', component: DashboardComponent },//listo
      { path: 'profile', component: ProfileComponent},//listo
      { path: 'academic', component: AcademicDataComponent},//listo
      { path: 'payment', component: PaymentComponent},//listo

      // Coord Routes
      { path: 'offers', component: OffersComponent},//listo
      { path: 'offers/create', component: OfferEditComponent},//Listo
      { path: 'offers/edit/:id', component: OfferEditComponent},//Listo
      { path: 'students', component: StudentsComponent},//listo
      { path: 'payments', component: PaymentsComponent},//Listo
      { path: 'settings', component: SettingsComponent},//listo
      
      //Admin routes
      { path: 'users', component: UsersComponent},
      { path: 'v-classroom', component: VclassroomComponent},//falta
      { path: 'user-role', component: UserRoleComponent},//Falta editar role

      //Profesor routes
      { path: 'notes', component: NotesComponent},
      { path: 'notes/report/:id', component: ReportComponent},
      { path: 'notes/create', component: CreateActaComponent},
      { path: 'virtual-classroom', component: VirtualClassroomComponent}
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
    VclassroomComponent
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
  ]
})
export class UserModule { }

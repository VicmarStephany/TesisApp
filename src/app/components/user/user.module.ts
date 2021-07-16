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

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: UserComponent,
    children: [
      // Students routes
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'academic', component: AcademicDataComponent},
      { path: 'payment', component: PaymentComponent},

      // Coord Routes
      { path: 'offers', component: OffersComponent,
        children: [
          { path: 'edit', component: OfferEditComponent},
          { path: 'create', component: OfferEditComponent},
        ]
      },
      { path: 'students', component: StudentsComponent},
      { path: 'notes', component: NotesComponent},
      { path: 'payments', component: PaymentsComponent}


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
    OfferEditComponent
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
export class UserModule { }

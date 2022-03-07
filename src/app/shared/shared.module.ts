import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BubblesComponent } from './bubbles/bubbles.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarAuthComponent } from './navbar-auth/navbar-auth.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import  {MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { FooterAuthComponent } from './footer-auth/footer-auth.component';
import { SectionsModule } from '../sections/sections.module';


@NgModule({
  declarations: [
    SearchBarComponent,
    BubblesComponent,
    NavbarComponent,
    FooterComponent,
    FooterAuthComponent,
    NavbarAuthComponent,
    NavbarLeftComponent,
    NavbarAdminComponent,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule ,
    SectionsModule
  ],
  exports:[
    SearchBarComponent,
    BubblesComponent,
    NavbarComponent,
    FooterComponent,
    FooterAuthComponent,
    FontAwesomeModule,
    NavbarAuthComponent,
    NavbarLeftComponent,
    NavbarAdminComponent,
    SidebarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class SharedModule { }

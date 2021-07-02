import { NgModule } from '@angular/core';
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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    BubblesComponent,
    NavbarComponent,
    FooterComponent,
    NavbarAuthComponent,
    NavbarLeftComponent,
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
    MatButtonModule
  ],
  exports:[
    SearchBarComponent,
    BubblesComponent,
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
    NavbarAuthComponent,
    NavbarLeftComponent,
    SidebarComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BubblesComponent } from './bubbles/bubbles.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SearchBarComponent,
    BubblesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    SearchBarComponent,
    BubblesComponent,
    NavbarComponent,
    FooterComponent,

    FontAwesomeModule
  ]
})
export class SharedModule { }

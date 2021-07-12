import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/utils/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StudentMenu } from 'src/app/utils/sidebar-menu';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  public focus;
  public user: User;
  public listTitles: any[];
  public location: Location;
  public personal: Array<any> =[];

  constructor(location: Location, private element: ElementRef, 
      private router: Router, private authService: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    this.personal = [{title:"Mi Perfil", path:"/profile"}, {title:"Configuración", path:"/profile"}];
    this.listTitles = StudentMenu.filter(listTitle => listTitle);
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(11) === '/') {
      titlee = titlee.slice(11);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      } else {
        if (this.personal[item].path === titlee) {
          return this.personal[item].title;
        }
      }
    }
    return 'Dashboard';
  }
  logOut() {
    this.authService.logOut();
    // this.router.navigateByUrl('/home');
    //location.reload()
  }

}

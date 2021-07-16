import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/utils/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StudentMenu } from 'src/app/utils/sidebar-menu';
import { Menu } from 'src/app/utils/sidebar.model';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  @Input('menu') menu: Array<Menu>;

  public focus;
  public user: User;
  public listTitles: any[];
  public location: Location;
  public personal: Array<any> = [];

  constructor(location: Location, private element: ElementRef,
    private router: Router, private authService: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    this.personal = [{ title: "Mi Perfil", path: "/profile" }, { title: "Configuración", path: "/profile" }];
    this.listTitles = this.menu.filter(listTitle => listTitle);
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(11) === '/') {
      titlee = titlee.slice(11);
    }

    for (var item = 0; item <= this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      } else {

        let personalT = this.testPersonalMenu(titlee, item);
        if (personalT != false) {
          return personalT;
        }
      }
    }
    return 'Dashboard';
  }

  testPersonalMenu(titlee, item): any {
    if (item < this.personal.length) {
      if (this.personal[item].path === titlee) {
        return this.personal[item].title;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  logOut() {
    this.authService.logOut();
    // this.router.navigateByUrl('/home');
    //location.reload()
  }

}

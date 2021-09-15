import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  public listTitles: Array<Menu>;
  public locationR: Location;
  public personal: Array<any> = [];
  public path: Array<any>;

  constructor(private location: Location, private element: ElementRef,
    private router: Router, private authService: AuthService, public route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.locationR = this.location;
    this.personal = [{ title: "Mi Perfil", path: "/profile" }, { title: "Configuración", path: "/settings" }];
    this.listTitles = this.menu.filter(listTitle => listTitle);
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  getTitle() {
    let titlee: string;
    //this.locationR = this.location;
    this.path = this.route.snapshot['_urlSegment'].segments;
    titlee = '/'+ this.path['1'].path;
      
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

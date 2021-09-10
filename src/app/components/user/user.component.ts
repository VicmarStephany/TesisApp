import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AdminMenu, CoordMenu, ProfeMenu, StudentMenu } from 'src/app/utils/sidebar-menu';
import { Menu } from 'src/app/utils/sidebar.model';
import { User, userInfo } from 'src/app/utils/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  userInfo: userInfo;
  idUser: number;
  type: number = 2;

  menu: Array<Menu>;

  constructor(private userService: UsersService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.type = this.user.rolId;
    this.idUser = this.user.id
  }

  ngOnInit() {
    //this.setMenu(this.type);
    this.setMenu(3);
    this.getUserInfo(this.idUser);
  }


  getUserInfo(id) {
    this.userService.getUser(id).subscribe(
      (res) => {
        if (res['s'] == true) {
          this.userInfo = res['d'];
          this.userService.setUserInfo(this.userInfo);
          console.log(this.userInfo)
        } else {
          console.log('no hay sesión iniciada');
          this.router.navigateByUrl("/login");
        }
      });
  }


  setMenu(n) {
    switch (n) {
      case 1:
        this.menu = StudentMenu;
        break;
      case 2:
        this.menu = AdminMenu;
        break;
      case 3:
        this.menu = CoordMenu;
        break;
      case 4:
        this.menu = ProfeMenu;
      default:
        break;
    }
  }


}

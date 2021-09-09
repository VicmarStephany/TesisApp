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

  type: number = 2;

  menu: Array<Menu>;

  constructor(private userService: UsersService, private router: Router) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.type = this.user.rolId;
    //this.getUserInfo(this.user.id)
  }

  ngOnInit(): void {
    this.setMenu(2);
  }

  setMenu(n){
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

import { Component, OnInit } from '@angular/core';
import { AdminMenu, CoordMenu, ProfeMenu, StudentMenu } from 'src/app/utils/sidebar-menu';
import { Menu } from 'src/app/utils/sidebar.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  type: number = 3;

  menu: Array<Menu>; 

  constructor() { }

  ngOnInit(): void {
    this.setMenu(this.type);
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

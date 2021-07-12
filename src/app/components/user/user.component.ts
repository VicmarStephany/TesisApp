import { Component, OnInit } from '@angular/core';
import { StudentMenu } from 'src/app/utils/sidebar-menu';
import { Menu } from 'src/app/utils/sidebar.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  menu: Array<Menu>;

  constructor() { }

  ngOnInit(): void {
    this.menu = StudentMenu;
  }

}

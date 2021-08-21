import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/utils/courses';
import { Users } from 'src/app/utils/users';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {
  public typeList: Array<string> = Courses;
  public userType: Array<any> = Users;

  constructor() { }

  ngOnInit(): void {
  }

}

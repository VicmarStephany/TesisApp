import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/utils/courses';
import { Users } from 'src/app/utils/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public typeList: Array<string> = Courses;
  public userType: Array<any> = Users;

  constructor() { }

  ngOnInit(): void {
  }

}

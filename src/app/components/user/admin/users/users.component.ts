import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Courses } from 'src/app/utils/courses';
import { User } from 'src/app/utils/user.model';
import { Users } from 'src/app/utils/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public typeList: Array<string> = Courses;
  public userType: Array<any> = Users;
  userList: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUser().subscribe((resp: User)=>{
      this.userList = resp['d'];
    });
  }

}

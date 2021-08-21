import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/utils/user.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    page = 2;
    page1 = 3;
    user: User;
    userInfo: any;

    constructor(private usersService: UsersService) { }

    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.usersService.getUser('5')
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { User, userInfo } from 'src/app/utils/user.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    page = 2;
    page1 = 3;
    user: User;
    userInfo: userInfo;
    type: any;
    idUser: any;

    constructor(private userService: UsersService, private router: Router) { }

    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.type = this.user.rolId;
      this.idUser = this.user.id
      this.getUserInfo(this.idUser);
    }

    
  getUserInfo(id) {
    this.userService.getUser(id).subscribe(
      (res) => {
        if (res['s'] == true) {
          this.userInfo = res['d'];
          console.log(this.userInfo)
        } else {
          console.log('no hay sesión iniciada');
          this.router.navigateByUrl("/login");
        }
    });
  }

}

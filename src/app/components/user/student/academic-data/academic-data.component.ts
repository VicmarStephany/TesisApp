import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { User, userInfo } from 'src/app/utils/user.model';

@Component({
  selector: 'app-academic-data',
  templateUrl: './academic-data.component.html',
  styleUrls: ['./academic-data.component.scss']
})
export class AcademicDataComponent implements OnInit {
  public user: User;
  public userInfo: userInfo

  public careerList: Array<any> = [
      {id: 123, name:'Maestría en Ingeniería Electrica'}, 
      {id: 456, name:'Especialización en Logística'}];

      constructor(private userService: UsersService, private router: Router) { }

      ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        //this.type = this.user.rolId;
        this.getUserInfo(this.user.id);
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

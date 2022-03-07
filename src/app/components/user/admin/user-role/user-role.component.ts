import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users/users.service';
import { Courses } from 'src/app/utils/courses';
import { BasicI } from 'src/app/utils/payment';
import { User, userInfo } from 'src/app/utils/user.model';
import { Users } from 'src/app/utils/users';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {
  public typeList: Array<BasicI> = Courses;
  public userType: Array<any> = Users;
  closeResult: string;
  userList: User[] = [];

  public documento: string= '';
  public rol: string = '';
  public programa: string = '';

  roles: Array<any> = [];

  constructor(private modalService: NgbModal, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUser().subscribe((resp: User)=>{
      this.userList = resp['d'];
    });

    this.getRoles();
  }

  open(id) {
    this.usersService.getUser(id).subscribe(
      res =>{
        if (res['s']== true) {
          let userInfo: userInfo = res['d'];
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.userInfo = userInfo;
        } else {
          //poner alert de error
        } 
      }
    )  
  }

  getRoles() {
    this.usersService.getRole().subscribe(res =>{
      console.log(res);
    })
  }

  filtrarUsuarios(){
    this.usersService.filterUsers(this.documento, this.rol, this.programa).then( res =>{
      if (res.s == true){
        this.userList = res.d;
      } else {
        this.userList = [];
      }
    })
  }

  
}

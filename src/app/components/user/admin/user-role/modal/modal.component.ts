import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users/users.service';
import { BasicI } from 'src/app/utils/payment';
import { userInfo } from 'src/app/utils/user.model';
import { Users } from 'src/app/utils/users';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('userInfo') userInfo: userInfo;

  rol: string;

  public userType: Array<BasicI> = [    
    {id: 'coordinador', name: 'Coordinador'},
    {id: 'docente', name: 'Docente'}
  ];

  constructor(public activeModal: NgbActiveModal, private userService: UsersService) {}

  ngOnInit(): void {
    console.log(this.userInfo);
    this.rol = this.userInfo.rolId == 4 ? 'coordinador' : 'docente';
  }

  changeRole(id, rol){
    let data = [{rol: rol}];
    this.userService.editRole(id, data).subscribe(res =>{
      console.log(res);
    })
  }

}

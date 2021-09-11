import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { userInfo } from 'src/app/utils/user.model';
import { Users } from 'src/app/utils/users';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('userInfo') userInfo: userInfo;
  public userType: Array<any> = Users;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}

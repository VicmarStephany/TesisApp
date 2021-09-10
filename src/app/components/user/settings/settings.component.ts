import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';
import { userInfo } from 'src/app/utils/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userInfo: userInfo;
  updateForm: FormGroup;
  passwordForm: FormGroup;
  spinner = false;
  alertId: any = 0;
  messageAlert: string;

  constructor(private authService: AuthService, private fb: FormBuilder,
    private usersService: UsersService, private spinnerServ: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.usersService.userInfoData.subscribe(
      res => {
        this.userInfo = res;
        console.log(this.userInfo);
        this.updateForm = this.fb.group({
          telefono1: [this.userInfo.telefono1, Validators.required],
          celular1: [this.userInfo.celular1, Validators.required],
          celular2: [this.userInfo.celular2, Validators.required],
          correo1: [this.userInfo.correo1, Validators.required],
          correo2: [this.userInfo.correo2, Validators.required],
          direccion1: [this.userInfo.direccion1, Validators.required],
          direccion2: [this.userInfo.direccion2, Validators.required]
        })
      }
    )

    this.passwordForm = new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required])
    });
  }

  updateInfo() {
    this.spinnerServ.show();
    let data = this.updateForm.value;
    this.usersService.updateUserInfo(this.userInfo.usuarioId, data).subscribe(
      res => {
        console.log(res);
        if (res['s'] == false ) {
          this.spinnerServ.hide();
          this.alertId = 3;
          this.messageAlert = 'al actualizar datos. Por favor, intente de nuevo.';
          setTimeout(() => {
            this.alertId = 0;
          }, 3000);
        } else {
          setTimeout(() => {
            this.spinnerServ.hide();
            location.reload();
          }, 3000);
        }
      }
    )
  }

  sendNewPassword(): void {
    this.spinnerServ.show();
    const user = JSON.parse(localStorage.getItem('user'));
    this.authService.resetPassword(user['id'], this.passwordForm.get('newPassword').value).subscribe(
      res => {
        console.log(res);
        if (res['s'] == false ) {
          this.spinnerServ.hide();
          this.alertId = 3;
          this.messageAlert = 'al actualizar contraseña. Por favor, intente de nuevo.';
          setTimeout(() => {
            this.alertId = 0;
          }, 3000);
        } else {
          setTimeout(() => {
            this.spinnerServ.hide();
            location.reload();
          }, 3000);
        }
      }
    );
  }

}

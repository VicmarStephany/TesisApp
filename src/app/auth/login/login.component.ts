import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  spinner = false;
  alertId: any = 0;
  messageAlert: string;

  focus;
  focus1;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private spinnerServ: NgxSpinnerService, private userService: UsersService) { }

  ngOnInit() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('info');

    this.login = this.fb.group({
      email: ['', Validators.required],// [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }
  get form() {
    return this.login.controls;
  }

  submit() {
    this.spinner = true;
    this.spinnerServ.show();

    /** setTimeout(() => {
       spinner ends after 5 seconds 
    }, 50000);*/
    let data = { user: this.form.email.value, pass: this.form.password.value };
    this.authService.login(data).subscribe(
      (res) => {
        if (res['s'] == false) {
          this.spinnerServ.hide();
          this.alertId = 3;
          this.messageAlert = 'al iniciar sesión. Por favor, revise usuario y/o contraseña.';
          setTimeout(() => {
            this.alertId = 0;
          }, 3000);
          /**Insertar alert de error */
        } else {
          localStorage.setItem('authToken', res['d'].token);
          localStorage.setItem('user', JSON.stringify(res['d']));
          let id = res['d'].id;
          this.userService.getUser(id).subscribe(
            (res) => {
              if (res['s'] == true) {
                this.userService.setUserInfo(res['d']);
                localStorage.setItem('info', JSON.stringify(res['d']))
                setTimeout(() => {
                  this.spinnerServ.hide();
                  this.router.navigateByUrl('/user-panel/profile');
                  //location.reload();
                }, 2000);
              } else {
                console.log('no hay sesión iniciada');
                //this.router.navigateByUrl("/login");
              }
            });

          
        }
      }, (err) => {
        console.log(err);
        this.spinnerServ.hide();
        this.alertId = 3;
        setTimeout(() => {
          this.alertId = 0;
        }, 3000);
        /**Insertar alert de error */
      });

  }


}

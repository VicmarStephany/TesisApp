import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { min } from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
    
  focus;
  focus1;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: ['',Validators.required],// [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }
  get form(){
    return this.login.controls;
  }

  submit(){
    console.log(this.login.value);
    let data = {user: "usuario", pass: "prueba" }; //{user: this.form.email, pass: this.form.password };
    this.authService.login(data);
    
  }


}

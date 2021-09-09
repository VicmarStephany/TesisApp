import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required])
    });
  }

  sendNewPassword(): void{
    console.log(this.passwordForm);
    const user = JSON.parse(localStorage.getItem('user'));
    this.authService.resetPassword(user['id'],this.passwordForm.get('newPassword').value).subscribe(resp=>{
      console.log(resp);
    });
  }

}

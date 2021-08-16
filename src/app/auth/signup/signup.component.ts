import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sexo } from 'src/app/utils/register';
import { Menu } from 'src/app/utils/sidebar.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    sexo: Array<any> = Sexo;

    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {

     }

    ngOnInit() {
        this.registerForm = this.fb.group({
            names: ['', Validators.required],
            lastNames: ['', Validators.required],
            idNumber: ['', Validators.required],
            sexo: ['1', Validators.required],
            birthday: ['', Validators.required],
            birthCity: ['', Validators.required],
            homePhone: ['', Validators.required],
            cellphone: ['', Validators.required],
            cellphone2: ['', Validators.required],
            email: ['', Validators.required],
            email2: ['', Validators.required],
            address: ['', Validators.required]
        })
    }

    signup() {
        let date = this.toDate(this.registerForm.controls.birthday.value);
        console.log(date);
        this.registerForm.controls.birthday.setValue(date);
        console.log(this.registerForm.value)
    }

    toDate(date){
        const jsDate = new Date(date.year, date.month - 1, date.day);
        return jsDate;
      }
}

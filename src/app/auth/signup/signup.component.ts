import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Sexo } from 'src/app/utils/register';
import { Menu } from 'src/app/utils/sidebar.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    sexo: Array<any> = Sexo;
    cities: Array<any> = [];

    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private citiesService: CitiesService,
        private usersService: UsersService) {

    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            nombres: ['', Validators.required],
            apellidoPaterno: ['', Validators.required],
            apellidoMaterno: ['', Validators.required],
            idNumber: ['', Validators.required],
            sexo: ['', Validators.required],
            fechaNacimiento: ['', Validators.required],
            ciudadNacimiento: ['ff', Validators.required],
            telefono1: ['', Validators.required],
            celular1: ['', Validators.required],
            celular2: ['', Validators.required],
            correo1: ['', Validators.required],
            correo2: ['', Validators.required],
            direccion1: ['', Validators.required],
            direccion2: ['', Validators.required],
            clave: [''],
            rol: ['estudiante'],
            codigoLapsoIngreso: ['1235'],
            user: [''],
            pass: ['']
        });

        this.citiesService.getCities().subscribe(
            (res) => {
                console.log(res)
                this.cities = res['d'];
                //console.log(this.cities)
            }
        )
        /*this.citiesService.getCountry().subscribe(
            (res)=>{
                console.log(res)
            }
        )
        this.citiesService.getParroquias().subscribe(
            (res)=>{
                console.log(res)
            }
        )*/
    }

    signup() {
        let date = this.toDate(this.registerForm.controls.fechaNacimiento.value);
        let name = this.registerForm.controls.nombres.value;
        let lastName = this.registerForm.controls.apellidoPaterno.value;
        this.registerForm.controls.fechaNacimiento.setValue(date);
        this.registerForm.controls.user.setValue((name.slice(0, 1) + lastName).toLowerCase());
        this.registerForm.controls.pass.setValue((lastName.slice(0, 1) + name).toLowerCase());
        //console.log(this.registerForm.value);
        let data = this.registerForm.value;

        this.usersService.createUser(data).subscribe(
            res => {
                console.log(res)

            }
        )
    }

    toDate(date) {
        let month;
        let day;
        if (date.month < 10) {
            month = '0' + date.month;
        } else {
            month = date.month;
        }
        if (date.day < 10) {
            day = '0' + date.day;
        } else {
            day = date.day;
        }
        let dataForm = date.year + "-" + month + "-" + day;
        return dataForm;
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { UsersService } from 'src/app/services/users/users.service';
import { BasicII } from 'src/app/utils/payment';
import { City, Estados, Sexo } from 'src/app/utils/register';
import { Menu } from 'src/app/utils/sidebar.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    sexo: Array<any> = Sexo;

    cities: Array<City> = [];
    citiesSelected: Array<City> = [];
    estados: Array<BasicII> = Estados;
    paises: Array<any> = [];
    parroquias: Array<any> = [];

    titlePage: number = 1;

    personalInfoForm: FormGroup;
    academicForm: FormGroup;

    constructor(private fb: FormBuilder, private citiesService: CitiesService,
        private usersService: UsersService) {

    }

    ngOnInit() {
        this.personalInfoForm = this.fb.group({
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
            pass: [''],
            pais: ['VENEZUELA', Validators.required],
            estado: ['', Validators.required]
        });
        
        this.academicForm = this.fb.group({
            gradoEstudios: ['', Validators.required],
            titulo: ['', Validators.required],
            anoPromocion: [0, Validators.required],
            institucion: ['', Validators.required],
            pais: ['', Validators.required],
        })

        this.citiesService.getCountry().subscribe(
            (res)=>{
                this.paises = res['d'];
                console.log(this.paises)
            }
        )
        this.citiesService.getCities().subscribe(
            (res) => {
                this.cities = res['d'];
                this.citiesSelected = this.cities.filter(city => city.estadoId == 1);
            }
        )
        this.citiesService.getParroquias().subscribe(
            (res)=>{
                this.parroquias = res['d'];
            }
        )
    }

    personalInfo() {
        let date = this.toDate(this.personalInfoForm.controls.fechaNacimiento.value);
        let name = this.personalInfoForm.controls.nombres.value;
        let lastName = this.personalInfoForm.controls.apellidoPaterno.value;
        this.personalInfoForm.controls.fechaNacimiento.setValue(date);
        this.personalInfoForm.controls.user.setValue((name.slice(0, 1) + lastName).toLowerCase());
        this.personalInfoForm.controls.pass.setValue((lastName.slice(0, 1) + name).toLowerCase());
        //console.log(this.personalInfoForm.value);
        let data = this.personalInfoForm.value;

        // this.usersService.createUser(data).subscribe(
        //     res => {
        //         console.log(res)
        //     }
        // )

        this.titlePage = 2;
    }

    signup(){
        
    }

    getCities(estado){
        if (estado) {
            this.citiesSelected = this.cities.filter(city => city.estadoId == estado);
        }
        console.log(this.citiesSelected)
    }


    getParroquias(){

    }

    setEstados() {

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

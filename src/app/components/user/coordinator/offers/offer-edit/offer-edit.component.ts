import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { OffersService } from 'src/app/services/offer/offers.service';
import { Campus, Courses, Courses2, Modes } from 'src/app/utils/courses';
import { OfferDetails } from 'src/app/utils/offers';
import { BasicI, BasicII } from 'src/app/utils/payment';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {
  offerForm: FormGroup;
  type: string;
  path: string;
  spinner = false;
  editOffer: OfferDetails;
  emptyForm: OfferDetails = {
    programaEstudioId: 1,
    campusId: 1,
    nombre: '',
    modalidad: '',
    descripcion: '',
    codigo: '',
    cantidadSemestres: 1,
    duracion: '',
    pensum: '',
    costo: 0,
    cantidadCupos: 30,
    id: null,
    cantidadSecciones: 1
  }


  public typeList: Array<BasicII> = Courses2;
  public campusList: Array<any> = Campus;
  public modesList: Array<any> = Modes;

  constructor(public route: ActivatedRoute, private fb: FormBuilder, private offerService: OffersService, 
    private spinnerServ: NgxSpinnerService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.path = res[1].path;
      let id;
      if (this.path == 'edit') {
        id = res[2].path;
        this.offerService.getOfferById(id).subscribe(
          res => {
            let offers: Array<OfferDetails> = res['d'];
            this.editOffer = offers['id'].filter(offer => offer.id == this.toNumber(id))[0];
            this.fillForm(this.editOffer);
          }
        )
      } else {
        this.fillForm(this.emptyForm)
      }
    });
  }

  fillForm(form: OfferDetails) {
    this.offerForm = this.fb.group({
      programaEstudioId: [form.programaEstudioId,Validators.required],
      campusId: [form.campusId, Validators.required],
      nombre: [form.nombre, Validators.required],
      modalidad: [form.modalidad, Validators.required],
      descripcion: [form.descripcion, Validators.required],
      codigo: [form.codigo, Validators.required],
      cantidadSemestres: [form.cantidadSemestres, Validators.required],
      duracion: [form.duracion, Validators.required],
      pensum: [form.pensum, Validators.required],
      costo: [form.costo, Validators.required],
      cantidadCupos: [form.cantidadCupos, Validators.required],
      id: [form.id],
      cantidadSecciones: [form.cantidadSecciones, Validators.required]
    });
    console.log(this.offerForm.value, this.offerForm.value)
  }

  submit() {
    this.spinnerServ.show();
    if (this.path == 'create') {
      //this.offerForm.controls['programaEstudioId'].setValue(this.offerForm.value.programaEstudioId);
      //this.offerForm.controls['campusId'].setValue(parseInt(this.offerForm.value.campusId));
      console.log(this.offerForm.value);
      let data = this.offerForm.value;
      this.offerService.createOffer(data).subscribe(
        (res) => {
          console.log(res);
          setTimeout(() => {
            this.spinnerServ.hide();
            this.router.navigateByUrl("/user-panel/offers")
          }, 3000);
        }
      )
    } else {
      let id = this.offerForm.controls.id.value;
      this.offerForm.removeControl('programaEstudioId');
      this.offerForm.removeControl('campusId');
      this.offerForm.removeControl('id');
      let data = this.offerForm.value;
      this.offerService.editOffer(id,data ).subscribe(
        (res) => {
          console.log(res);
          this.spinnerServ.hide();
        }
      );
    }

  }

  toNumber(n): number {
    return parseInt(n);
  }

}

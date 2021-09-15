import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/services/offer/offers.service';
import { Campus, Courses, Modes } from 'src/app/utils/courses';
import { Offer } from 'src/app/utils/offers';
import { BasicI } from 'src/app/utils/payment';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {
  offerForm: FormGroup;
  type: string;
  path: string;
  editOffer: Offer;


  public typeList: Array<BasicI> = Courses;
  public campusList: Array<any> = Campus;
  public modesList: Array<any> = Modes;

  constructor(public route: ActivatedRoute, private fb: FormBuilder, private offerService: OffersService) {

  }

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.path = res[1].path;
      if (this.path.length > 2) {
        //this.offerService.getOfferById(res[2].path).suscribe(res =>{})
      }
    });

    this.offerForm = this.fb.group({
      programaId: ['1', Validators.required],
      campusId: ['1', Validators.required],
      nombre: ['', Validators.required],
      modalidad: ['presencial', Validators.required],
      descripcion: ['', Validators.required],
      codigo: ['', Validators.required],
      cantidadSemestres: ['', Validators.required],
      duracion: ['', Validators.required],
      pensum: ['', Validators.required],
      costo: ['', Validators.required],
    })
  }

  checkType() {
    if (this.path == 'edit') {

    }
  }

  submit() {
    this.offerForm.controls['programaId'].setValue( parseInt(this.offerForm.value.programaId)) ;
    this.offerForm.controls['campusId'].setValue( parseInt(this.offerForm.value.campusId)) ;
    console.log(this.offerForm.value);
    let data = this.offerForm.value;
    this.offerService.createOffer(data).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }

  toNumber(n) : number {
    return parseInt(n);
  }

}

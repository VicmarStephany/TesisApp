import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { BankList, BasicI, PayMethod } from 'src/app/utils/payment';
import { validateLocaleAndSetLanguage } from 'typescript';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public methodList: Array<BasicI> = PayMethod;
  public bankList: Array<BasicI> = BankList;
  
  public paymentForm: FormGroup;

  model : NgbDate;
  model2 : NgbDate;

  focus;
  focus1;
  focus2;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      type: ['',  Validators.required],
      date: ['', Validators.required],
      fromBank: ['', Validators.required],
      toBank: ['', Validators.required],
      transactionId: ['', Validators.required],

    })
  }

  onDateSelection(e){
    console.log('aca: ',e);
    console.log(this.model)
  }

  toDate(){
    console.log(this.model);
    const jsDate = new Date(this.model.year, this.model.month - 1, this.model.day);
    return jsDate;
  }

  submit(){
    console.log(this.paymentForm.value)
  }

}

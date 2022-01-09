import { Component, OnInit } from '@angular/core';
import { Courses, StatusPay } from 'src/app/utils/courses';
import { BasicI } from 'src/app/utils/payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  
  public typeList: Array<BasicI> = Courses;
  public statusList: Array<any> = StatusPay;
  paymentList = [];

  constructor() { }

  ngOnInit(): void {
    this.paymentList = JSON.parse(localStorage.getItem('paymentStorage')) ?? [];
    console.log(this.paymentList);
  }

}

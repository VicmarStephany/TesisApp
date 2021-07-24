import { Component, OnInit } from '@angular/core';
import { Courses, StatusPay } from 'src/app/utils/courses';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  
  public typeList: Array<string> = Courses;
  public statusList: Array<any> = StatusPay;


  constructor() { }

  ngOnInit(): void {
  }

}

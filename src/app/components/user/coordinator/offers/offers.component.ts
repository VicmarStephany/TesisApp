import { Component, OnInit } from '@angular/core';
import { Campus, Courses, Modes } from 'src/app/utils/courses';
import { BasicI } from 'src/app/utils/payment';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public typeList: Array<BasicI> = Courses;
  public campusList: Array<any> = Campus;
  public modesList: Array<any> = Modes;

  public userId: any = 5;
  constructor() { }

  ngOnInit(): void {
  }

}

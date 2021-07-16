import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/utils/courses';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public typeList: Array<string> = Courses;


  constructor() { }

  ngOnInit(): void {
  }

}

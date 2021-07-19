import { Component, OnInit } from '@angular/core';
import { Campus, Courses, Modes } from 'src/app/utils/courses';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {

  public typeList: Array<string> = Courses;
  public campusList: Array<any> = Campus;
  public modesList: Array<any> = Modes;

  constructor() { }

  ngOnInit(): void {
  }

}

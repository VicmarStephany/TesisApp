import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campus, Courses, Modes } from 'src/app/utils/courses';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {

  type: string;
  location: Location;
  path: string;

  public typeList: Array<string> = Courses;
  public campusList: Array<any> = Campus;
  public modesList: Array<any> = Modes;

  constructor(location: Location, public route: ActivatedRoute) { 
    this.location = location;
    console.log(this.route.url);
    //this.path = this.route.url._value[1].path; 
  }

  ngOnInit(): void {
    let aux = this.location.prepareExternalUrl(this.location.path());
    console.log(aux);
  }

}

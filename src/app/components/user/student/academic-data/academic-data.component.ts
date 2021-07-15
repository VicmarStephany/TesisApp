import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-data',
  templateUrl: './academic-data.component.html',
  styleUrls: ['./academic-data.component.scss']
})
export class AcademicDataComponent implements OnInit {

  public careerList: Array<any> = [
      {id: 123, name:'Maestría en Ingeniería Electrica'}, 
      {id: 456, name:'Especialización en Logística'}];

  constructor() { }

  ngOnInit(): void {
  }

}

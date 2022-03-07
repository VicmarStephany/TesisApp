import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-acta',
  templateUrl: './create-acta.component.html',
  styleUrls: ['./create-acta.component.scss']
})
export class CreateActaComponent implements OnInit {
  

  public subjectList: Array<any> = [
    {id: 123, name:'Termodinámica I'}, 
    {id: 456, name:'Matemáticas II'},
    {id: 789, name:'Matemáticas III'},
  ];
  public lapsoList: Array<any> = [
    {id: 12344, name:'2021-I'},
    {id: 12354, name:'2021-II'},
  ]

  path: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.route.snapshot['_urlSegment'].segments[1];
  }

}

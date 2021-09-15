import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  path: string;

  public subjectList: Array<any> = [
    {id: 123, name:'Termodinámica I'}, 
    {id: 456, name:'Matemáticas II'},
    {id: 789, name:'Matemáticas III'},
  ];
  public lapsoList: Array<any> = [
    {id: 12344, name:'2021-I'},
    {id: 12354, name:'2021-II'},
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.route.snapshot['_urlSegment'].segments[1];
  }

}

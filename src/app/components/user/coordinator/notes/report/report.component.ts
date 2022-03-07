import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActasService } from 'src/app/services/actas/actas.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private actasService: ActasService) { }

  ngOnInit(): void {
    this.path = this.route.snapshot['_urlSegment'].segments[1];

  }

}

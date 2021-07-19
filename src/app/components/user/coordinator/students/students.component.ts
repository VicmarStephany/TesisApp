import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/utils/courses';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public typeList: Array<string> = Courses;

  constructor() { }

  ngOnInit(): void {
  }

}

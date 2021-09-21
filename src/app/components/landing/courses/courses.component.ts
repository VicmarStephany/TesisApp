import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { Courses } from 'src/app/utils/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any = Courses;

  constructor(private programService: ProgramsService) { }

  ngOnInit(): void {

    this.programService.getPrograms().subscribe(
      res => {
        console.log(res)
      }
    )

    this.programService.getCarreras().subscribe(
      res => {
        console.log(res)
      }
    )
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/utils/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any = Courses;

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

  }


}

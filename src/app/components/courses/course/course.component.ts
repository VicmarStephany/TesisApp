import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  type: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    console.log(this.route);
     this.setType(this.route.snapshot.params['id']);
  }

  setType(param){
    switch (param) {
      case 'Especialidades':
        this.type = 'Especialidades';
        break;
      case 'Maestrías':
        this.type = 'Maestrías';
        break;
      case 'Doctorados':
        this.type = 'Doctorados';
        break;
      case 'Diplomados':
        this.type = 'Diplomados';
        break;
      case 'Cursos':
        this.type = 'Cursos';
        break;
      default:
        break;
    }
  }
}
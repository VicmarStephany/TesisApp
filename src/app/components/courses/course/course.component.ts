import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  circle = faPlusCircle;

  type: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(params => {
      this.type =params['id']
    });
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
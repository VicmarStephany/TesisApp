import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { StudentService } from 'src/app/services/student/student.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { Courses } from 'src/app/utils/courses';
import { Offer, Subject } from 'src/app/utils/offers';
import { BasicI } from 'src/app/utils/payment';
import { User } from 'src/app/utils/user.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  noOffers: Offer[] = [{
    carrera: 'Sin coincidencias',
    carreraId: 0,
    codigo: '',
    programa: ''
  }];

  noSubject: Subject[] = [{
    asignaturaId: 0,
    carrera: '',
    carreraId: 0,
    codigo: '',
    nombre: 'Sin coincidencias'
  }]
  user: User;
  type:number;
  student: any;
  offers: Array<Offer>;
  subjects: Array<Subject>;
  programId: string = 'especializacion';
  offerSelected: number = 7;
  subjectSelected: number = 22;

  public typeList: Array<BasicI> = Courses;

  constructor(private studentService: StudentService, private subjectService: SubjectsService,
    private programService: ProgramsService) { }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('user'));
    this.type = this.user.rolId;

    this.studentService.getStudent(3).subscribe(
      res => {
        console.log(res);
      }
    );
    this.subjectService.getSubjects(7).subscribe(
      (res) => {
        console.log(res);
        this.subjects = res['d'];
      }
    )
    this.programService.getCarreras().subscribe(
      (res) => {
        console.log(res);
        this.offers = res['d'];
      }
    )
  }

  selected(id, type) {
    switch (type) {
      case 1:
        this.programService.getCarreras().subscribe(
          (res) => {
            let aux = res['d'];
            this.offers = aux.filter(offer => offer.programa == id);
            this.offers.length > 0 ? 
              this.offerSelected = this.offers[0].carreraId : 
              this.offers = this.noOffers
          }
        )
        break;
      case 2:
        this.subjectService.getSubjects(id).subscribe(
          (res) => {
            let aux = res['d'];
            this.subjects = aux;
            this.subjects.length > 0 ? 
              this.subjectSelected = this.subjects[0].asignaturaId : 
              this.subjects = this.noSubject
          }
        )
        break;
      default:
        break;
    }
  }

}

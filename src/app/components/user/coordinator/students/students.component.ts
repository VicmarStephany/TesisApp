import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { StudentService } from 'src/app/services/student/student.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { Courses } from 'src/app/utils/courses';
import { Offer, Subject } from 'src/app/utils/offers';
import { BasicI } from 'src/app/utils/payment';
import { Student } from 'src/app/utils/student';
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
  carreras: Array<Offer>;
  subjects: Array<Subject>;

  programId: string = 'especializacion';
  offerSelected: string = '';
  subjectSelected: number = 22;
  documento: string ='';
  asignatura: string = '';
  nombre: string = '';
  apellido: string = '';

  estudiantesList: Student[] = []

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
        this.carreras = res['d'];
      }
    )
    this.getEstudiantes();
  }

  selected(id, type) {
    switch (type) {
      case 1:
        this.programService.getCarreras().subscribe(
          (res) => {
            let aux = res['d'];
            this.carreras = aux.filter(offer => offer.programa == id);
            this.carreras.length > 0 ? 
              this.offerSelected = this.carreras[0].carrera : 
              (this.carreras = this.noOffers, this.offerSelected = 'no hay');
              this.filtrarEstudiantes();
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

  getEstudiantes() {
    this.studentService.getStudents().subscribe(res=>{
      if (res['s'] == true) {
        this.estudiantesList = res['d'];
      }
      console.log(this.estudiantesList)
    })
  }

  verCarrera(codigo: string): string {
    for(let i=0; i< this.carreras.length;i++ )
      if (this.carreras[i].codigo == codigo) {
        return this.carreras[i].carrera;
      } else {
        return 'no encontrado';
      }
  }

  verPrograma(codigo: string) {
    for(let i=0; i< this.carreras.length;i++ )
      if (this.carreras[i].codigo == codigo) {
        return this.carreras[i].programa;
      } else {
        return 'no encontrado';
      }
  }

  filtrarEstudiantes(){
    this.studentService.filterStudents(this.documento, this.offerSelected,this.nombre, this.apellido ).subscribe(res =>{
      console.log(res)
      if (res['s'] == true) {
        this.estudiantesList = res['d'];
      } else {
        this.estudiantesList = [];
      }
    })
  }

}

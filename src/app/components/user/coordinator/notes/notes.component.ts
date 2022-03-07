import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActasService } from 'src/app/services/actas/actas.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { Acta } from 'src/app/utils/actas';
import { Lapso } from 'src/app/utils/asignaturas';
import { Courses } from 'src/app/utils/courses';
import { Offer, Subject } from 'src/app/utils/offers';
import { BasicI } from 'src/app/utils/payment';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  path: string;
  actas: Array<Acta> = [];

  offers: Array<Offer>;
  subjects: Array<Subject>;
  programId: string = 'especializacion';
  offerSelected: number = 7;
  subjectSelected: number = 22;
  public typeList: Array<BasicI> = Courses;

  lapsoSelected: string;
  asignaturaSelected: string;

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

  public subjectList: Array<any> = [
    {id: 123, name:'Termodinámica I'}, 
    {id: 456, name:'Matemáticas II'},
    {id: 789, name:'Matemáticas III'},
  ];
  lapsoList: Array<Lapso> = [];

  constructor(private route: ActivatedRoute, private actasService: ActasService, private subjectService: SubjectsService,
    private programService: ProgramsService){ }

  ngOnInit(): void {
    this.path = this.route.snapshot['_urlSegment'].segments[1];
    this.getGrades();
    this.getLapsos();
  }

  getGrades() {
    this.actasService.getActas('1234', '').subscribe(res => {
      if (res['s'] == true) {
        this.actas = res['d'];
      }
      console.log(this.actas);
     
    })
  }

  getLapsos(){
    this.subjectService.getLapsos().subscribe(res => {
      if (res['s'] == true) {
        this.lapsoList = res['d'];
      }
      console.log(this.lapsoList);
    })
  }

  getSecciones() {

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

  setData(){
    localStorage.setItem('seccionActaData', '');
  }
}

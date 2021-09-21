import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
    tk: localStorage.getItem('authToken')
  })
};
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getSubjects(idCourse) {
    return this.http.get(this.api +'asignatura?carreraId='+idCourse, httpOptions);
  }
}

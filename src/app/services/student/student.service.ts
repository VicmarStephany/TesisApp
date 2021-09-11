import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
export class StudentService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getStudent(id) {
    return this.http.get(this.api +'estudiante/'+ id, httpOptions);
  }

  getStudents() {
    return this.http.get(this.api +'estudiantes', httpOptions);
  }

}

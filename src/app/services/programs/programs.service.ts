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
export class ProgramsService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getPrograms() {
    return this.http.get(this.api +'programa', httpOptions);
  }

  getCarreras() {
    return this.http.get(this.api +'carrera', httpOptions);
  }

}
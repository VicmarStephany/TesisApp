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
export class CitiesService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getCountry(){
    return this.http.get(this.api + 'pais', httpOptions)
  }

  getCities(){
    return this.http.get(this.api + 'ciudades/venezuela', httpOptions)
  }

  getParroquias(){
    return this.http.get(this.api + 'parroquias/venezuela', httpOptions)
  }
}

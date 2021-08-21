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
export class UsersService {
  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getUser(id){
    return this.http.get(this.api + 'usuario/'+ id, httpOptions).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}

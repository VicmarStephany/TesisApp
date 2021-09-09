import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
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

  private messageStatus = new BehaviorSubject<any>([]);
  currentStatus = this.messageStatus.asObservable();

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getUser(id){
    return this.http.get(this.api + 'usuario/'+ id, httpOptions)
  }

  getAllUser(): Observable<any>{
    return this.http.get(this.api + 'usuario', httpOptions)
  }

  changeStatus(status) {
    this.messageStatus.next(status);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Response } from 'src/app/utils/response';
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

  private userInfo = new Subject<any>();
  userInfoData = this.userInfo.asObservable();

  api = environment.api;
  private httpOptions = {
    headers: new HttpHeaders({
       'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
      tk: localStorage.getItem('authToken')
    })
  };

  constructor(public http: HttpClient, public router: Router) { }

  getUser(id){
    return this.http.get(this.api + 'usuario/'+ id,this.httpOptions)
  }

  getAllUser(): Observable<any>{
    return this.http.get(this.api + 'usuario', httpOptions)
  }

  filterUsers(documento: string,rol: string,programa: string ): Promise<Response> {
    return this.http.get(this.api +'usuario?documento='+documento+'&rol='+rol+'&programa='+programa, httpOptions).toPromise().then(res =>
      res as Response)
  }
  createUser(data){
    return this.http.put(this.api + 'usuario', data, httpOptions)
  }

  updateUserInfo(id, data) {
    return this.http.patch(this.api + 'usuario/' + id, data, httpOptions)
  }

  setUserInfo(info) {
    this.userInfo.next(info);
  }

  getRole() {
    return this.http.get(this.api + 'rol', httpOptions);
  }

  editRole(id, data) {
    return this.http.patch(this.api + 'rol/'+id, data, httpOptions)
  }

}

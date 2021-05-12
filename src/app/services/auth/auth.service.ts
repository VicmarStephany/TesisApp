import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api;

  constructor(public http: HttpClient) { }

  login(data) {
    return this.http.post(this.api + 'auth/login/', data).subscribe(
      (res) => {
        console.log(res['d']);
        localStorage.setItem('authToken', res['d'].token);
      }, (err) => {
        console.log(err)
      })
  }
}

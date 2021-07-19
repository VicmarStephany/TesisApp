import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  login(data) {
    return this.http.post(this.api + 'auth/login/', data).subscribe(
      (res) => {
        console.log(res);
        console.log(res['d']);
        localStorage.setItem('authToken', res['d'].token);
        localStorage.setItem('user', JSON.stringify(res['d']));
        this.router.navigateByUrl('/user-panel/profile');
        //location.reload();
      }, (err) => {
        console.log(err)
      })
  }

  logOut(){
    return this.http.post(this.api + 'auth/logout', '').subscribe(
      (res) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        console.log(res);
        this.router.navigateByUrl('/home');
        //location.reload();
      },
      (err) =>{
        console.log(err);
      }
    )
  }
}

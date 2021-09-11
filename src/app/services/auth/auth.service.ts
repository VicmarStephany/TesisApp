import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
export class AuthService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  login(data) {
    return this.http.post(this.api + 'auth/login/', data)
  }

  logOut(){
    return this.http.post(this.api + 'auth/logout', '').subscribe(
      (res) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        localStorage.removeItem('info');
        console.log(res);
        this.router.navigateByUrl('/home');
        //location.reload();
      },
      (err) =>{
        console.log(err);
      }
    )
  }  

  resetPassword(id: number, sendPassword: string): Observable<any>{
    return this.http.post(this.api + 'usuario/'+id+'/resetPassword', {password: sendPassword}, httpOptions);
  }

  
}

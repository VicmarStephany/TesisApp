import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

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

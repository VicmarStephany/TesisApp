import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from 'src/app/utils/user.model';

@Injectable({
  providedIn: 'root'
})
export class CoordGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate():  boolean{
    const admin: User =  JSON.parse(localStorage.getItem('user'));
    if(!admin){
      this.router.navigate(['/home']);
      return false;
    }
    if(admin?.rolId == 3){
      return true;
    }else{
      this.router.navigate(['/user-panel/profile']);
      return false;
    }
  }
  
}

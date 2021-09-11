import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotLoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate():  boolean{
    if(localStorage.getItem('authToken')){
      return true;
    }else{
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}

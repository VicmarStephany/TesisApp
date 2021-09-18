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
export class OffersService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getOffers(){
    return this.http.get(this.api +'oferta', httpOptions)
  }

  getOfferById(id) {

  }

  createOffer(offer){
    return this.http.put(this.api + 'oferta', offer, httpOptions)
  }
}

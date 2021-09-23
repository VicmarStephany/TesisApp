import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OfferDetails } from 'src/app/utils/offers';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
    tk: localStorage.getItem('authToken')
  })
};
const httpOptionsN = {
  headers: new HttpHeaders({
     'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class OffersService {

  api = environment.api;

  constructor(public http: HttpClient, public router: Router) { }

  getOffers(){
    return this.http.get(this.api +'oferta', httpOptionsN)
  }

  getOfferById(id): any {
   return this.http.get(this.api +'oferta', httpOptions)
  }

  createOffer(offer){
    return this.http.put(this.api + 'oferta', offer, httpOptions)
  }

  editOffer(id, data) {
    return this.http.patch(this.api +'oferta/' + id, data, httpOptions)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer-auth',
    templateUrl: './footer-auth.component.html',
    styleUrls: ['./footer-auth.component.scss']
})
export class FooterAuthComponent implements OnInit {
    test : Date = new Date();

    constructor(private router: Router ) {}

    ngOnInit() {

    }
    getPath(){
      return this.router.url;
    }
}

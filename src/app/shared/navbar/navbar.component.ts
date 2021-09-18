import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { Courses } from 'src/app/utils/courses';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HomeNav, HomeNavChilds } from 'src/app/utils/navbar-type';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    public user: any; 

    courses = Courses;
    navbar = HomeNav;
    navbarChild = HomeNavChilds;

    constructor(public location: Location, private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
        //this.location.subscribe((ev: PopStateEvent) => {
        //    this.lastPoppedUrl = ev.url;
        //});
        //this.user = JSON.parse(localStorage.getItem('user'));
        //console.log(this.user)
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
    checkType(type) {
        let url = '#/course/'+type;
        var titlee = this.location.prepareExternalUrl(this.location.path());
        console.log(titlee);
        console.log(type);
        if (titlee != url) {
            this.router.navigateByUrl('/courses/'+type);
        }
    }

    logOut(){
        this.authService.logOut();
       // this.router.navigateByUrl('/home');
        //location.reload()
    }
}

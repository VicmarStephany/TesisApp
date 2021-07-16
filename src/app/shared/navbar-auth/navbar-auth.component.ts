import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { Courses } from 'src/app/utils/courses';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-navbar-auth',
    templateUrl: './navbar-auth.component.html',
    styleUrls: ['./navbar-auth.component.scss']
})
export class NavbarAuthComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    courses = Courses;

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
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
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

}
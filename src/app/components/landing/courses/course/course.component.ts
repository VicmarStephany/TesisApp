import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { OffersService } from 'src/app/services/offer/offers.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { OfferDetails } from 'src/app/utils/offers';
import { Courses } from 'src/app/utils/courses';
import { BasicI } from 'src/app/utils/payment';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  circle = faPlusCircle;
  
  programs: Array<BasicI> = Courses; 
  courses: Array<OfferDetails>;
  type: any;

  constructor(private router: Router, private route: ActivatedRoute, 
              private offerService: OffersService, private programService: ProgramsService) {
    
  }

  ngOnInit(): void {
    
    console.log(this.route);
    this.route.params.subscribe(params => {
      this.setType(params['id']);
    });

    this.programService.getCarreras().subscribe(
      (res) => {
        let aux = res['d'];
        this.courses = aux.filter(offer => offer.programa == this.type.id)
      }
    )

    this.offerService.getOffers().subscribe(
      (res) => {
        let aux = res['d']['id'];
        console.log(aux)

      }
    )
  }

  setType(param){
    let aux = this.programs.filter(type => type.id == param)
    this.type = aux[0];
  }
}
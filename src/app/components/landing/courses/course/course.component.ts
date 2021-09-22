import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { OffersService } from 'src/app/services/offer/offers.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { Offer, OfferDetails } from 'src/app/utils/offers';
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
  courses: Array<Offer>;
  coursesDetails: Array<OfferDetails>;
  detail: OfferDetails;
  type: any;

  constructor(private router: Router, private route: ActivatedRoute,
    private offerService: OffersService, private programService: ProgramsService) {
  }

  ngOnInit(): void {
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
        this.coursesDetails = aux;
      }
    )
  }

  setType(param) {
    let aux = this.programs.filter(type => type.id == param)
    this.type = aux[0];
    this.programService.getCarreras().subscribe(
      (res) => {
        let aux = res['d'];
        this.courses = aux.filter(offer => offer.programa == this.type.id)
      }
    )

  }

  getCarrera(id) {
    let detail = this.coursesDetails.filter(course => course.id == id);
    this.detail = detail[0];
    console.log(this.detail)
  }

  campusTransform(id): string {
    switch (id) {
      case 1:
        return 'Vice-Rectorado Puerto Ordaz';
        break;
      case 2:
        return 'Vice-Rectorado "Luis Caballero Mejías" - Caracas';
        break;
      case 3:
        return 'Vice-Rectorado Barquisimeto';
        break;
      default:
        break;
    }
  }
}
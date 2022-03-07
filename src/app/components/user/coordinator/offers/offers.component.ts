import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offer/offers.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { Campus, Courses, Modes } from 'src/app/utils/courses';
import { Offer, OfferDetails } from 'src/app/utils/offers';
import { BasicI } from 'src/app/utils/payment';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public typeList: Array<BasicI> = Courses;
  public campusList: Array<any> = Campus;
  public modesList: Array<any> = Modes;

  public userId: any = 5;
  public offers: Array<OfferDetails> = [];
  public page = 1;
  public totalSize: number;
  public pageSize = 10;
  public data: Array<OfferDetails>;

  public modalidad: string = '';
  public programa: string = '';

  constructor(private offerService: OffersService, private programService: ProgramsService) { }

  ngOnInit(): void {
    //this.getOffers();
    //this.refreshData();
    this.filterOferta();
  }

  getOffers() {
    this.offerService.getOffers().subscribe(
      res => {
        console.log(res)
      }
    );

    this.programService.getCarreras().subscribe(
      res => {
        if (res['s'] == true) {
          console.log(res);
          this.totalSize = res['d'].length;
          this.data = res['d'];
          this.refreshData();
        } else {

        }
      }
    )
  }

  refreshData() {
    this.offers = this.data.map((offer, i) => ({ id: i + 1, ...offer })).slice(
      (this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  filterOferta(){
    this.offerService.filterOffer(this.modalidad, this.programa).then(res =>{
      if (res.s == true) {
        this.offers = res.d['id']; 
        this.totalSize = res.d['id'].length;
        this.data = res.d['id'];
        this.refreshData();
        console.log(this.offers)
      } else {
        this.offers = [];
      }
    })
  }
}

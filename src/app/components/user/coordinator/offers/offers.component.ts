import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offer/offers.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { Campus, Courses, Modes } from 'src/app/utils/courses';
import { Offer } from 'src/app/utils/offers';
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
  public offers: Array<Offer>;
  public page = 1;
  public totalSize: number;
  public pageSize = 20;
  public data: Array<Offer>;

  constructor(private offerService: OffersService, private programService: ProgramsService) { }

  ngOnInit(): void {
    this.getOffers();
    //this.refreshData();
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
    this.offers = this.data.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}

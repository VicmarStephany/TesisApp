import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs/programs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private programService: ProgramsService) { }

  ngOnInit(): void {

    this.programService.getPrograms().subscribe(
      res => {
        console.log(res)
      }
    )

    this.programService.getCarreras().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}

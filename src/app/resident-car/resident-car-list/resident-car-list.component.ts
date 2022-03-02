import { ResidentCar } from './../../residents/residentCar';
import { ResidentCarService } from './../../services/resident-car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident-car-list',
  templateUrl: './resident-car-list.component.html',
  styleUrls: ['./resident-car-list.component.css']
})
export class ResidentCarListComponent implements OnInit {
  residentsCars!:ResidentCar[];

  constructor(private residentCarService: ResidentCarService) { }

  ngOnInit(): void {
    this.getAllResidentsCars();
  }

  getAllResidentsCars(){
    this.residentCarService.getAllResidentsCars()
    .subscribe(response => {
      this.residentsCars = response.content
    }, errorResponse => {
      console.log(errorResponse)
    })
  }

}

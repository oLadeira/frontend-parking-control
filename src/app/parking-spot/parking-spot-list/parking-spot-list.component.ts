import { FieldError } from './../../fieldError';
import { ParkingSpot } from './../parkingSpot';
import { ParkingSpotService } from './../../services/parking-spot.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-spot-list',
  templateUrl: './parking-spot-list.component.html',
  styleUrls: ['./parking-spot-list.component.css']
})
export class ParkingSpotListComponent implements OnInit {

  parkingSpots!: ParkingSpot[];
  parkingSpot!:ParkingSpot;
  errors!: FieldError[];
  success!: boolean;

  constructor(private parkingSpotService: ParkingSpotService, private router:Router) {
    this.parkingSpot = new ParkingSpot();
   }

  ngOnInit(): void {
    this.parkingSpotService.getAllParkingSpots()
    .subscribe(response => {
      this.parkingSpots = response.content;
      console.log(this.parkingSpots);
    },responseError => {
      alert("Erro ao carregar vagas");
    })
  }

  getByIdParkingSpot(){
    this.parkingSpotService.getByIdParkingSpot(this.parkingSpot.id);
    console.log(this.parkingSpot);
  }

  saveParkingSpot(){
    this.parkingSpotService.saveParkingSpot(this.parkingSpot)
    .subscribe(response => {
      this.success = true;
    }, errorResponse => {
      console.log(errorResponse);
      this.errors = errorResponse.error.errors;
      console.log(this.errors)
      this.success = false;
    });
  }

  backParkingSpotList(){
    this.router.navigate(["/dashboard/"])
  }

}

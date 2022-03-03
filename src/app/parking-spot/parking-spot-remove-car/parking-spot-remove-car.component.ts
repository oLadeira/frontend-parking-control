import { ResidentToParkingSpot } from './../residentToParkingSpot';
import { ParkingSpot } from './../parkingSpot';
import { ParkingSpotService } from './../../services/parking-spot.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-spot-remove-car',
  templateUrl: './parking-spot-remove-car.component.html',
  styleUrls: ['./parking-spot-remove-car.component.css']
})
export class ParkingSpotRemoveCarComponent implements OnInit {
  parkingSpotRemove!:ParkingSpot;
  parkingSpot!: ResidentToParkingSpot;

  constructor(public modal:NgbActiveModal, private parkingSpotService: ParkingSpotService) {
    this.parkingSpot = new ResidentToParkingSpot();

   }

  ngOnInit(): void {
  }

  removeResidentToParkingSpot(){
    this.parkingSpot.licensePlateCar = this.parkingSpotRemove.residentCar.licensePlateCar;
    this.parkingSpot.parkingSpotNumber = this.parkingSpotRemove.parkingSpotNumber
    console.log(this.parkingSpot)
    this.parkingSpotService.removeResidentCarParkingSpot(this.parkingSpot)
    .subscribe(response => {
      console.log(response)
    }, errorResponse => {
      console.log(errorResponse)
    })
  }

}

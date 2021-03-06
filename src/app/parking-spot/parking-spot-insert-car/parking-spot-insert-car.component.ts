import { Error } from './../../error';
import { FieldError } from './../../fieldError';
import { ResidentToParkingSpot } from './../residentToParkingSpot';
import { ParkingSpotService } from './../../services/parking-spot.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-spot-insert-car',
  templateUrl: './parking-spot-insert-car.component.html',
  styleUrls: ['./parking-spot-insert-car.component.css']
})
export class ParkingSpotInsertCarComponent implements OnInit {
  residentToParkingSpot!:ResidentToParkingSpot
  parkingSpotNumber!:string;
  error!:Error;

  constructor(public modal:NgbActiveModal, private parkingSpotService: ParkingSpotService) {
    this.residentToParkingSpot = new ResidentToParkingSpot();
    this.residentToParkingSpot.parkingSpotNumber = this.parkingSpotNumber;
    console.log(this.residentToParkingSpot)
   }

  ngOnInit(): void {
  }

  insertResidentToParkingSpot(){
    this.parkingSpotService.insertCarParkingSpot(this.residentToParkingSpot)
    .subscribe(response => {
      this.parkingSpotService.successInsertCarMessage.emit(true)
      this.modal.close();
    },errorResponse => {
      this.error = errorResponse.error
      console.log(errorResponse)
    })
  }

}

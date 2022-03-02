import { FieldError } from './../../fieldError';
import { ParkingSpot } from './../parkingSpot';
import { ParkingSpotService } from './../../services/parking-spot.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-spot-save-modal',
  templateUrl: './parking-spot-save-modal.component.html',
  styleUrls: ['./parking-spot-save-modal.component.css']
})
export class ParkingSpotSaveModalComponent implements OnInit {
  parkingSpot!:ParkingSpot;
  errors!:FieldError[];
  error!:string;

  constructor(private parkingSpotService: ParkingSpotService ,public modal: NgbActiveModal) {
    this.parkingSpot = new ParkingSpot();
  }

  ngOnInit(): void {
  }

  saveParkingSpot(){
    this.parkingSpotService.saveParkingSpot(this.parkingSpot)
    .subscribe(response => {
      this.modal.close();
      this.parkingSpotService.successSaveMessage.emit(true);
    }, errorResponse => {
      this.errors = errorResponse.error.errors
      this.error = errorResponse.error.message
      console.log(errorResponse)
    })
  }

}

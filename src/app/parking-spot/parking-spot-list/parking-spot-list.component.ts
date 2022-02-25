import { ParkingSpotSaveModalComponent } from './../parking-spot-save-modal/parking-spot-save-modal.component';
import { FieldError } from './../../fieldError';
import { ParkingSpot } from './../parkingSpot';
import { ParkingSpotService } from './../../services/parking-spot.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-spot-list',
  templateUrl: './parking-spot-list.component.html',
  styleUrls: ['./parking-spot-list.component.css']
})
export class ParkingSpotListComponent implements OnInit {

  parkingSpots!: ParkingSpot[];
  parkingSpot!:ParkingSpot;
  errors!: FieldError[];
  successSaveMessage!:boolean;

  constructor(private parkingSpotService: ParkingSpotService, private router:Router, private modalService: NgbModal) {
    this.parkingSpot = new ParkingSpot();
   }

  ngOnInit(): void {

    this.parkingSpotService.successSaveMessage
    .subscribe(valueSave => {
      this.successSaveMessage = true

      if (valueSave == true){
        this.getAllParkingSpots();
      }
    })



   this.getAllParkingSpots();
  }

  getAllParkingSpots(){
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
    }, errorResponse => {
      console.log(errorResponse);
      this.errors = errorResponse.error.errors;
      console.log(this.errors)
    });
  }

  callSaveParkingSpot(){
    this.modalService.open(ParkingSpotSaveModalComponent, { size: 'xl' })
  }

  backParkingSpotList(){
    this.router.navigate(["/dashboard/"])
  }

}

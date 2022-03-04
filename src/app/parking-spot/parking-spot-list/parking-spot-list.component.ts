import { ParkingSpotRemoveCarComponent } from './../parking-spot-remove-car/parking-spot-remove-car.component';
import { ResidentToParkingSpot } from './../residentToParkingSpot';
import { ParkingSpotInsertCarComponent } from './../parking-spot-insert-car/parking-spot-insert-car.component';
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
  residentToParkingSpot!:ResidentToParkingSpot
  errors!: FieldError[];
  successSaveMessage!:boolean;
  successInsertCarMessage!:boolean;
  successRemoveCarMessage!:boolean;

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

    this.parkingSpotService.successRemoveCarMessage
    .subscribe(value => {
      this.successRemoveCarMessage = value

      if (value == true){
        this.getAllParkingSpots();
      }
    })

    this.parkingSpotService.successInsertCarMessage
    .subscribe(value => {
      this.successInsertCarMessage = value;

      if (value = true){
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

  callInsertCar(parkingSpotNumber: string){
    const ref = this.modalService.open(ParkingSpotInsertCarComponent, { size: 'xl' })
    ref.componentInstance.residentToParkingSpot.parkingSpotNumber = parkingSpotNumber
    console.log(parkingSpotNumber)
  }

  callRemoveCarModal(parkingSpot: ParkingSpot){
    const ref = this.modalService.open(ParkingSpotRemoveCarComponent, {size: 'ml'})
    ref.componentInstance.parkingSpotRemove = parkingSpot;
  }

  backParkingSpotList(){
    this.router.navigate(["/dashboard/"])
  }

}

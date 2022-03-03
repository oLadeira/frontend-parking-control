import { ResidentCarSaveModalComponent } from './../resident-car-save-modal/resident-car-save-modal.component';
import { ResidentCar } from './../../residents/residentCar';
import { ResidentCarService } from './../../services/resident-car.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resident-car-list',
  templateUrl: './resident-car-list.component.html',
  styleUrls: ['./resident-car-list.component.css']
})
export class ResidentCarListComponent implements OnInit {
  residentsCars!:ResidentCar[];
  successSaveMessage!:boolean;

  constructor(private residentCarService: ResidentCarService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getAllResidentsCars();
    this.residentCarService.successSaveMessage
    .subscribe(value=>{
      this.successSaveMessage = value
      if (value == true){
        this.getAllResidentsCars();
      }
    })
  }

  getAllResidentsCars(){
    this.residentCarService.getAllResidentsCars()
    .subscribe(response => {
      this.residentsCars = response.content
    }, errorResponse => {
      console.log(errorResponse)
    })
  }

  callResidentCarSaveModal(){
    this.modalService.open(ResidentCarSaveModalComponent, {size: 'xl'})
  }
}

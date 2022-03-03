import { Error } from './../../error';
import { ResidentCarDeleteModalComponent } from './../resident-car-delete-modal/resident-car-delete-modal.component';
import { ResidentCarEditModalComponent } from './../resident-car-edit-modal/resident-car-edit-modal.component';
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
  residentCar!:ResidentCar;
  successSaveMessage!:boolean;
  successEditMessage!:boolean;
  successDeleteMessage!:boolean;
  errorDeleteMessage!:Error;

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

    this.residentCarService.successEditMessage
    .subscribe(value=>{
      this.successEditMessage = value
      if (value == true){
        this.getAllResidentsCars();
      }
    })

    this.residentCarService.successDeleteMessage
    .subscribe(value=>{
      this.successDeleteMessage = value
      if (value == true){
        this.getAllResidentsCars();
      }
    })

    this.residentCarService.errorDeleteMessage
    .subscribe(value=>{
      this.errorDeleteMessage = value

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

  callResidentCarEditModal(residentCar: ResidentCar){
    const ref = this.modalService.open(ResidentCarEditModalComponent, {size: 'xl'})
    ref.componentInstance.residentCarEdit = residentCar;
  }

  callResidentCarDeleteModal(residentCar: ResidentCar){
    const ref = this.modalService.open(ResidentCarDeleteModalComponent, {size: 'ml'})
    ref.componentInstance.residentCarDelete = residentCar
  }
}

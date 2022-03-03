import { ResidentCarService } from './../../services/resident-car.service';
import { ResidentCar } from './../../residents/residentCar';
import { Error } from './../../error';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident-car-delete-modal',
  templateUrl: './resident-car-delete-modal.component.html',
  styleUrls: ['./resident-car-delete-modal.component.css']
})
export class ResidentCarDeleteModalComponent implements OnInit {
  residentCarDelete!:ResidentCar
  error!:Error

  constructor(public modal:NgbActiveModal, private residentCarService:ResidentCarService) { }

  ngOnInit(): void {
  }

  deleteResident(){
    this.residentCarService.deleteResidentCar(this.residentCarDelete)
    .subscribe(response => {
      this.modal.close();
      this.residentCarService.successDeleteMessage.emit(true)
      console.log(response)
    }, errorResponse => {
      console.log(errorResponse)
    });
  }

}

import { FieldError } from './../../fieldError';
import { ResidentCar } from './../../residents/residentCar';
import { ResidentCarService } from './../../services/resident-car.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident-car-edit-modal',
  templateUrl: './resident-car-edit-modal.component.html',
  styleUrls: ['./resident-car-edit-modal.component.css']
})
export class ResidentCarEditModalComponent implements OnInit {
  residentCarEdit!:ResidentCar;
  errors!:FieldError[];
  constructor(private residentCarService: ResidentCarService, public modal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  editResidentCar(){
    this.residentCarService.editResidentCar(this.residentCarEdit)
    .subscribe(response => {
      this.residentCarService.successEditMessage.emit(true)
      this.modal.close();
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
    })
  }

}

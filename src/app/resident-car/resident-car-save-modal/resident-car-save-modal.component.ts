import { FieldError } from './../../fieldError';
import { SaveResidentCar } from './../saveResidentCar';
import { ResidentCarService } from './../../services/resident-car.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident-car-save-modal',
  templateUrl: './resident-car-save-modal.component.html',
  styleUrls: ['./resident-car-save-modal.component.css']
})
export class ResidentCarSaveModalComponent implements OnInit {
  residentCar!: SaveResidentCar;
  errors!:FieldError[];

  constructor(private residentCarService: ResidentCarService ,public modal:NgbActiveModal) {
    this.residentCar = new SaveResidentCar();
  }

  ngOnInit(): void {
  }

  saveResidentCar(){
    this.residentCarService.saveResidentCar(this.residentCar)
    .subscribe(response => {
      this.residentCarService.successSaveMessage.emit(true);
      this.modal.close();
    }, errorResponse => {
      this.errors = errorResponse.error.errors
    })
  }

}

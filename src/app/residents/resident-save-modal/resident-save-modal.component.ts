import { ResidentService } from './../../services/resident.service';
import { Resident } from './../resident';
import { FieldError } from './../../fieldError';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident-save-modal',
  templateUrl: './resident-save-modal.component.html',
  styleUrls: ['./resident-save-modal.component.css']
})
export class ResidentSaveModalComponent implements OnInit {
  errors!:FieldError[];
  success!:boolean;
  residentSave!: Resident;

  constructor(private residentService: ResidentService ,public modal:NgbActiveModal) {
    this.residentSave = new Resident();
  }

  ngOnInit(): void {
  }

  saveResident(){
    this.residentService.saveResident(this.residentSave)
    .subscribe(response => {

    }, errorResponse => {
      this.errors = errorResponse.error.errors
      if (!this.errors){
        this.residentService.successMessageEmitter.emit(true);
        this.modal.close();
      }
    })
  }


}

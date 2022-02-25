import { Error } from './../../error';
import { FieldError } from './../../fieldError';
import { ResidentService } from './../../services/resident.service';
import { Resident } from './../resident';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident-delete-modal',
  templateUrl: './resident-delete-modal.component.html',
  styleUrls: ['./resident-delete-modal.component.css']
})
export class ResidentDeleteModalComponent implements OnInit {
  resident!:Resident;
  error!: Error;

  constructor(private residentService: ResidentService ,public modal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteResident(){
    this.residentService.deleteResident(this.resident.id)
    .subscribe(response => {
    this.modal.close();
    this.residentService.successDeleteMessageEmitter.emit(true)
    }, errorResponse => {
      console.log(errorResponse);
      this.error = errorResponse.error
      console.log(this.error);
    });
  }

}

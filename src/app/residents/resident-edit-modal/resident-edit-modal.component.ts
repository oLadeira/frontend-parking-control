import { FieldError } from './../../fieldError';
import { ResidentService } from './../../services/resident.service';
import { Resident } from './../resident';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resident-edit-modal',
  templateUrl: './resident-edit-modal.component.html',
  styleUrls: ['./resident-edit-modal.component.css']
})
export class ResidentEditModalComponent implements OnInit {
  updatedResident!: Resident;
  success!:boolean;
  errors:FieldError[] = [];
  constructor(private residentService: ResidentService ,public modal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  editResident(){
    this.residentService.updateResident(this.updatedResident)
    .subscribe(response=> {
      this.residentService.successUpdateMessageEmitter.emit(true);
      this.modal.close();
    }, errorResponse => {
      this.errors = errorResponse.error.errors
    });

  }

}

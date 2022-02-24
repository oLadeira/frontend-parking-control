import { ResidentEditModalComponent } from './../resident-edit-modal/resident-edit-modal.component';
import { FieldError } from '../../fieldError';
import { PageResident } from './../pageResident';
import { ResidentService } from './../../services/resident.service';
import { Component, OnInit } from '@angular/core';
import { Resident } from '../resident';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-residents-table',
  templateUrl: './residents-table.component.html',
  styleUrls: ['./residents-table.component.css']
})
export class ResidentsTableComponent implements OnInit {

  residents!:Resident[];
  resident!:Resident;
  errors!:FieldError[];
  success!:string;

  id!:string;

  constructor(private residentService: ResidentService, private activatedRoute: ActivatedRoute, private modalService: NgbModal ) {
    this.resident = new Resident();
   }

  ngOnInit(): void {
    this.residentService.getAllResidents()
    .subscribe(response => {
      this.residents = response.content;
      console.log(response);
    });
  }

  getByIdResident(id:string){
    console.log(this.residentService.getByIdResident(id));
  }

  saveResident(): void{
    this.residentService.saveResident(this.resident)
    .subscribe(response => {
      this.ngOnInit();
      this.errors = [];
      this.success = 'Morador cadastrado com sucesso';
    }, errorResponse => {
      this.errors = errorResponse.error.errors
      this.success = '';
    });
  }

  callEditModal(resident:Resident){
    const ref = this.modalService.open(ResidentEditModalComponent)
    ref.componentInstance.updatedResident = resident;
  }

}

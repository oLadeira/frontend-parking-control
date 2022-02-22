import { FieldError } from './../fieldError';
import { PageResident } from './../pageResident';
import { ResidentService } from './../../services/resident.service';
import { Component, OnInit } from '@angular/core';
import { Resident } from '../resident';
import { ThisReceiver } from '@angular/compiler';

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

  constructor(private residentService: ResidentService ) {
    this.resident = new Resident();
   }

  ngOnInit(): void {
    this.residentService.getAllResidents()
    .subscribe(response => {
      this.residents = response.content;
      console.log(response);
    });
  }

  saveResident(){
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

}

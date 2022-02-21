import { PageResident } from './../pageResident';
import { ResidentService } from './../../services/resident.service';
import { Component, OnInit } from '@angular/core';
import { Resident } from '../resident';

@Component({
  selector: 'app-residents-table',
  templateUrl: './residents-table.component.html',
  styleUrls: ['./residents-table.component.css']
})
export class ResidentsTableComponent implements OnInit {

  residents!:Resident[];

  constructor(private residentService: ResidentService ) { }

  ngOnInit(): void {
    this.residentService.getAllResidents()
    .subscribe(response => {
      this.residents = response.content;
      console.log(response);
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingSpotRoutingModule } from './parking-spot-routing.module';
import { ParkingSpotListComponent } from './parking-spot-list/parking-spot-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParkingSpotListComponent
  ],
  imports: [
    CommonModule,
    ParkingSpotRoutingModule,
    FormsModule
  ]
})
export class ParkingSpotModule { }

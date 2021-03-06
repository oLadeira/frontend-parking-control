import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingSpotRoutingModule } from './parking-spot-routing.module';
import { ParkingSpotListComponent } from './parking-spot-list/parking-spot-list.component';
import { FormsModule } from '@angular/forms';
import { ParkingSpotSaveModalComponent } from './parking-spot-save-modal/parking-spot-save-modal.component';
import { ParkingSpotInsertCarComponent } from './parking-spot-insert-car/parking-spot-insert-car.component';
import { ParkingSpotRemoveCarComponent } from './parking-spot-remove-car/parking-spot-remove-car.component';



@NgModule({
  declarations: [
    ParkingSpotListComponent,
    ParkingSpotSaveModalComponent,
    ParkingSpotInsertCarComponent,
    ParkingSpotRemoveCarComponent
  ],
  imports: [
    CommonModule,
    ParkingSpotRoutingModule,
    FormsModule,
  ]
})
export class ParkingSpotModule { }

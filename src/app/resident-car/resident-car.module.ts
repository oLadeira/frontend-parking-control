import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentCarRoutingModule } from './resident-car-routing.module';
import { ResidentCarListComponent } from './resident-car-list/resident-car-list.component';
import { FormsModule } from '@angular/forms';
import { ResidentCarSaveModalComponent } from './resident-car-save-modal/resident-car-save-modal.component';


@NgModule({
  declarations: [
    ResidentCarListComponent,
    ResidentCarSaveModalComponent
  ],
  imports: [
    CommonModule,
    ResidentCarRoutingModule,
    FormsModule
  ]
})
export class ResidentCarModule { }

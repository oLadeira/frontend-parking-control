import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentCarRoutingModule } from './resident-car-routing.module';
import { ResidentCarListComponent } from './resident-car-list/resident-car-list.component';
import { FormsModule } from '@angular/forms';
import { ResidentCarSaveModalComponent } from './resident-car-save-modal/resident-car-save-modal.component';
import { ResidentCarEditModalComponent } from './resident-car-edit-modal/resident-car-edit-modal.component';


@NgModule({
  declarations: [
    ResidentCarListComponent,
    ResidentCarSaveModalComponent,
    ResidentCarEditModalComponent
  ],
  imports: [
    CommonModule,
    ResidentCarRoutingModule,
    FormsModule
  ]
})
export class ResidentCarModule { }

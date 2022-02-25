import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsTableComponent } from './residents-table/residents-table.component';
import { FormsModule } from '@angular/forms';
import { ResidentEditModalComponent } from './resident-edit-modal/resident-edit-modal.component';
import { RouterModule } from '@angular/router';
import { ResidentSaveModalComponent } from './resident-save-modal/resident-save-modal.component';
import { ResidentDeleteModalComponent } from './resident-delete-modal/resident-delete-modal.component';


@NgModule({
  declarations: [
    ResidentsTableComponent,
    ResidentEditModalComponent,
    ResidentSaveModalComponent,
    ResidentDeleteModalComponent,
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ResidentsTableComponent,
    ResidentEditModalComponent
  ]
})
export class ResidentsModule { }

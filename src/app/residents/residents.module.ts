import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsTableComponent } from './residents-table/residents-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResidentsTableComponent,
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    FormsModule
  ],
  exports: [
    ResidentsTableComponent
  ]
})
export class ResidentsModule { }

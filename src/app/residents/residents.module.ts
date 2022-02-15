import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsTableComponent } from './residents-table/residents-table.component';


@NgModule({
  declarations: [
    ResidentsTableComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule
  ],
  exports: [
    ResidentsTableComponent
  ]
})
export class ResidentsModule { }

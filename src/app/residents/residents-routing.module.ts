import { ResidentsTableComponent } from './residents-table/residents-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'moradores', component: ResidentsTableComponent },
  { path: 'moradores/:id', component: ResidentsTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentsRoutingModule { }

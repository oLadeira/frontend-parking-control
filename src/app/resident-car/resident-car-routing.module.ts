import { ResidentCarListComponent } from './resident-car-list/resident-car-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'veiculos', component: ResidentCarListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentCarRoutingModule { }

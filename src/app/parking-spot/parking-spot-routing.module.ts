import { ParkingSpotListComponent } from './parking-spot-list/parking-spot-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vagas', component: ParkingSpotListComponent},
  { path: 'vagas/:id', component: ParkingSpotListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingSpotRoutingModule { }

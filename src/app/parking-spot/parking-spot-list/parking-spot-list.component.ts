import { ParkingSpot } from './../parkingSpot';
import { ParkingSpotService } from './../../services/parking-spot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-spot-list',
  templateUrl: './parking-spot-list.component.html',
  styleUrls: ['./parking-spot-list.component.css']
})
export class ParkingSpotListComponent implements OnInit {

  parkingSpots!: ParkingSpot[];

  constructor(private parkingSpotService: ParkingSpotService) { }

  ngOnInit(): void {
    this.parkingSpotService.getAllParkingSpots()
    .subscribe(response => {
      this.parkingSpots = response.content;
      console.log(this.parkingSpots);
    },responseError => {

    })
  }

}

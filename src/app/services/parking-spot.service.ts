import { PageParkingSpot } from './../parking-spot/pageParkingSpot';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  baseUrl:string =  environment.baseUrl;

  constructor(private http:HttpClient ) { }

  getAllParkingSpots(): Observable<PageParkingSpot>{
    return this.http.get<PageParkingSpot>(`${this.baseUrl}/api/parking-spot/?page=0&size=10&direction=ASC&sort=status,DESC`);
  }


}

import { ParkingSpot } from './../parking-spot/parkingSpot';
import { PageParkingSpot } from './../parking-spot/pageParkingSpot';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ResidentToParkingSpot } from '../parking-spot/residentToParkingSpot';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  baseUrl:string =  environment.baseUrl;

  successSaveMessage = new EventEmitter<boolean>();
  successRemoveCarMessage = new EventEmitter<boolean>();

  constructor(private http:HttpClient ) { }

  getAllParkingSpots(): Observable<PageParkingSpot>{
    return this.http.get<PageParkingSpot>(`${this.baseUrl}/api/parking-spot/?page=0&size=20&direction=ASC&sort=status,DESC&sort=parkingSpotNumber,ASC`);
  }

  getByIdParkingSpot(id:string): Observable<ParkingSpot>{
    return this.http.get<ParkingSpot>(`${this.baseUrl}/api/parking-spot/${id}`);
  }

  saveParkingSpot(parkingSpot:ParkingSpot): Observable<ParkingSpot>{
    return this.http.post<ParkingSpot>(`${this.baseUrl}/api/parking-spot`, parkingSpot);
  }

  insertCarParkingSpot(residentToParkingSpot:ResidentToParkingSpot): Observable<ResidentToParkingSpot>{
    return this.http.post<ResidentToParkingSpot>(`${this.baseUrl}/api/parking-spot/add-resident-car`, residentToParkingSpot)
  }

  removeResidentCarParkingSpot(residentToParkingSpot: ResidentToParkingSpot): Observable<ResidentToParkingSpot>{
    return this.http.post<ResidentToParkingSpot>(`${this.baseUrl}/api/parking-spot/remove-resident-car`, residentToParkingSpot)
  }

}

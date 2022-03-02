import { PageResidentCar } from './../resident-car/pageResidentCar';
import { ResidentCar } from './../residents/residentCar';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidentCarService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  getAllResidentsCars(): Observable<PageResidentCar>{
    return this.http.get<PageResidentCar>(`${this.baseUrl}/api/resident-car/?page=0&size=10&direction=ASC`)
  }
}

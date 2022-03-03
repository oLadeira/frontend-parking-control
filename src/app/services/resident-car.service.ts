import { SaveResidentCar } from './../resident-car/saveResidentCar';
import { PageResidentCar } from './../resident-car/pageResidentCar';
import { ResidentCar } from './../residents/residentCar';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidentCarService {

  constructor(private http: HttpClient) { }

  successSaveMessage = new EventEmitter<boolean>();

  baseUrl: string = environment.baseUrl;

  getAllResidentsCars(): Observable<PageResidentCar>{
    return this.http.get<PageResidentCar>(`${this.baseUrl}/api/resident-car/?page=0&size=10&direction=ASC`)
  }

  saveResidentCar(residentCar:SaveResidentCar): Observable<SaveResidentCar>{
    return this.http.post<SaveResidentCar>(`${this.baseUrl}/api/resident-car`, residentCar);
  }
}

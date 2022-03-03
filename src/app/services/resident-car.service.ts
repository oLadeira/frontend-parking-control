import { SaveResidentCar } from './../resident-car/saveResidentCar';
import { PageResidentCar } from './../resident-car/pageResidentCar';
import { ResidentCar } from './../residents/residentCar';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, APP_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Error } from '../error';

@Injectable({
  providedIn: 'root'
})
export class ResidentCarService {

  constructor(private http: HttpClient) { }

  successSaveMessage = new EventEmitter<boolean>();
  successEditMessage = new EventEmitter<boolean>();
  successDeleteMessage = new EventEmitter<boolean>();
  errorDeleteMessage = new EventEmitter<Error>();

  baseUrl: string = environment.baseUrl;

  getAllResidentsCars(): Observable<PageResidentCar>{
    return this.http.get<PageResidentCar>(`${this.baseUrl}/api/resident-car/?page=0&size=10&direction=ASC`)
  }

  saveResidentCar(residentCar:SaveResidentCar): Observable<SaveResidentCar>{
    return this.http.post<SaveResidentCar>(`${this.baseUrl}/api/resident-car`, residentCar);
  }

  editResidentCar(residentCar:ResidentCar): Observable<ResidentCar>{
    return this.http.put<ResidentCar>(`${this.baseUrl}/api/resident-car/${residentCar.id}`, residentCar)
  }

  deleteResidentCar(residentCar:ResidentCar){
    return this.http.delete(`${this.baseUrl}/api/resident-car/${residentCar.id}`)
  }
}

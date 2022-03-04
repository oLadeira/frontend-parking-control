import { PageResident } from './../residents/pageResident';
import { environment } from './../../environments/environment.prod';
import { Resident } from './../residents/resident';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  baseUrl: string = environment.baseUrl;

  successMessageEmitter = new EventEmitter<boolean>();
  successDeleteMessageEmitter = new EventEmitter<boolean>();
  successUpdateMessageEmitter = new EventEmitter<boolean>();

  constructor( private http: HttpClient) {
    console.log('CursoService instancia')
  }

  getAllResidents(): Observable<PageResident>{
    return this.http.get<PageResident>(`${this.baseUrl}/api/resident/?page=0&size=20&direction=ASC&sort=registrationDate,DESC`)
  }

  getByIdResident(id:string): Observable<Resident>{
    return this.http.get<Resident>(`${this.baseUrl}/api/resident/${id}`)
  }

  saveResident(resident: Resident): Observable<Resident>{
    //this.successMessageEmitter.emit(true);
    return this.http.post<Resident>(`${this.baseUrl}/api/resident`, resident)
  }

  updateResident(resident:Resident): Observable<Resident>{
    return this.http.put<Resident>(`${this.baseUrl}/api/resident/${resident.id}`, resident)
  }

  deleteResident(id:string){
    return this.http.delete(`${this.baseUrl}/api/resident/${id}`)
  }
}

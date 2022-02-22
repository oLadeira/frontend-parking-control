import { PageResident } from './../residents/pageResident';
import { environment } from './../../environments/environment';
import { Resident } from './../residents/resident';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getAllResidents(): Observable<PageResident>{
    return this.http.get<PageResident>(`${this.baseUrl}/api/resident/`)
  }

  saveResident(resident: Resident): Observable<Resident>{
    return this.http.post<Resident>(`${this.baseUrl}/api/resident`, resident)
  }

}
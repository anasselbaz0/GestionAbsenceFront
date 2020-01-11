import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Absence} from '../model/Absence';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Absence[]> {
    return this.http.get<Absence[]>('http://localhost:8080/absences', this.httpOptions);
  }

}

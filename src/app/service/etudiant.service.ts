import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Etudiant} from '../model/Etudiant';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getByUsername(username: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.apiURL + 'etudiants/username/' + username, this.httpOptions);
  }

}

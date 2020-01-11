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

  url = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAll(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.url + 'etudiants', this.httpOptions);
  }
  deleteEtudiant(id: number) {
    return this.http.delete(this.url + 'etudiants/delete/' + id, this.httpOptions);
  }
  addEtudiant(etudiant: Etudiant) {
    return this.http.post(this.url + 'etudiants/add', etudiant, this.httpOptions);
  }
  updateEtudiant(etudiant: Etudiant)  {
    return this.http.put(this.url + 'etudiants/add', etudiant, this.httpOptions);
  }
  getByUsername(username: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.url + 'etudiants/username/' + username, this.httpOptions);
  }

}

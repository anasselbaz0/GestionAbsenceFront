import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Professeur} from '../model/Professeur';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProfesseurService {

  url = 'http://localhost:8080/';
  baseUrl = 'http://localhost:8080/professeurs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getAll(): Observable<Professeur[]> {
    return this.http.get<Professeur[]>(this.url + 'professeurs', this.httpOptions);
  }
  getProfesseur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  deleteProfesseur(id: number) {
    return this.http.delete(this.url + 'professeurs/delete/' + id, this.httpOptions);
  }
  addProfesseur(professeur: Professeur) {
    return this.http.post(this.url + 'professeurs/add', professeur, this.httpOptions);
  }
  updateClasse(professeur: Professeur)  {
    return this.http.put(this.url + 'professeurs/add', professeur, this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Classe} from '../model/Classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  url = 'http://localhost:8080/';
  baseUrl = 'http://localhost:8080/classes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.url + 'classes', this.httpOptions);
  }

  getClasse(id: number): Observable<Classe> {
    return this.http.get<Classe>(this.url + 'classes/' + id, this.httpOptions);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  deleteClasse(id: number) {
    return this.http.delete(this.url + 'classes/delete/' + id, this.httpOptions);
  }
  addClasse(classe: Classe) {
    return this.http.post(this.url + 'classes/add', classe, this.httpOptions);
  }
  updateClasse(classe: Classe)  {
    return this.http.put(this.url + 'classes/add', classe, this.httpOptions);
  }
  getByFiliere(filiere: string): Observable<Classe[]>  {
    return this.http.get<Classe[]>(this.url + 'classes/filiere/' + filiere, this.httpOptions);
  }
}

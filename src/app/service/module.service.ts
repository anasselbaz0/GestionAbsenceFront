import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../model/Module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  url = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Module[]> {
    return this.http.get<Module[]>(this.url + 'modules', this.httpOptions);
  }

  deleteModule(m: any) {
    return this.http.delete(this.url + 'modules/delete/' + m.id.toString(), this.httpOptions);
  }

  addModule(module: Module) {
    return this.http.post(this.url + 'modules/add', module, this.httpOptions);
  }
}

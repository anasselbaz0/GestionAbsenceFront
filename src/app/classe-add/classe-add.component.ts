import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-classe-add',
  templateUrl: './classe-add.component.html',
  styleUrls: ['./classe-add.component.css']
})
export class ClasseAddComponent implements OnInit {

  classe: any = {
    annee: '',
    filiere: '',
    cycle: '',
    groupe: '',
  };

  annees: string[] = ['CP1', 'CP2', 'CI1', 'CI2', 'CI3'];
  filieres: string[] = ['NONE', 'GI', 'GP', 'GE', 'GRT', 'TC'];
  cycles: string[] = ['CP', 'CI'];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  save() {
    console.log(this.classe);
    this.http.post('http://localhost:8080/classes/add', this.classe)
      .subscribe(result => {
          
        }, error => {
          console.log(error);
        }
      );
    this.router.navigate(['classes']);

  }

}

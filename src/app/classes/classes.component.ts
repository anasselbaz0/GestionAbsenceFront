import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ClasseService} from '../service/classe.service';
import {Classe} from '../model/Classe';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes: Observable<Classe[]>;
  constructor(private classeService: ClasseService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.classes = this.classeService.getAll();
  }
  deleteClasse(id: number) {
    this.classeService.deleteClasse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  AjouterClasse() {
    this.router.navigateByUrl('classe/add' );
  }

}

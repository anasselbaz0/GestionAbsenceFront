import { Component, OnInit } from '@angular/core';
import {ProfesseurService} from '../service/professeur.service';
import {Router} from '@angular/router';
import {Professeur} from '../model/Professeur';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {

  professeurs: Observable<Professeur[]>;
  constructor(private professeurService: ProfesseurService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.professeurs = this.professeurService.getAll();
  }
  deleteProfesseur(id: number) {
    this.professeurService.deleteProfesseur(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  AjouterProfesseur(){
    this.router.navigateByUrl('professeur/add' );
  }

}

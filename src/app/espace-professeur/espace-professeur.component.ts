import { Component, OnInit } from '@angular/core';
import { Classe } from '../model/Classe';
import { ClasseService } from '../service/classe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-espace-professeur',
  templateUrl: './espace-professeur.component.html',
  styleUrls: ['./espace-professeur.component.css']
})
export class EspaceProfesseurComponent implements OnInit {

  constructor(
    private classeService: ClasseService,
    private router: Router
  ) { }

  classes: Classe[] = [];
  cpClasses: Classe[] = [];
  ciClasses: Classe[] = [];

  ngOnInit() {
    this.classeService.getAll().subscribe(result => {
      this.classes = result;
    });
    this.classeService.getByFiliere('CI').subscribe(result=> {
      this.ciClasses = result;
    });
    this.classeService.getByFiliere('CP').subscribe(result => {
      this.cpClasses = result;
    });
  }

  viewClasse(classe: Classe) {
    this.router.navigate(['/classe', classe.cycle, classe.annee, classe.filiere, classe.groupe]);
  }

}

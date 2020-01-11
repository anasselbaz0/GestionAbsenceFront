import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Classe} from '../model/Classe';
import {Absence} from '../model/Absence';
import {Etudiant} from '../model/Etudiant';
import {EtudiantService} from '../service/etudiant.service';
import {Professeur} from '../model/Professeur';
import {Module} from '../model/Module';
import {ProfesseurService} from '../service/professeur.service';
import {ModuleService} from '../service/module.service';
import {AbsenceService} from '../service/absence.service';
import {ClasseService} from '../service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private etudiantS: EtudiantService,
    private profsS: ProfesseurService,
    private modulesS: ModuleService,
    private absencesS: AbsenceService,
    private classeS: ClasseService
  ) { }

  professeurs: Professeur[] = [];
  modules: Module[] = [];
  etudiants: Etudiant[] = [];
  absences: Absence[] = [];
  classe = new Classe();

  ngOnInit() {
    if (this.getTheClasse()) {
      if (this.getAllEtudiants() && this.getAllModules() && this.getAllProfs()) {
        this.modifyClasseAbsences();
        this.modifyAbcensesEtudiants();
      }
    }
  }

  private getTheClasse(): boolean {
    this.route.params.subscribe( params => {
      this.classeS.getAll().subscribe(result => {
        result.forEach((c: Classe) => {
          if (
            c.filiere.localeCompare(params.filiere) &&
            c.groupe === params.groupe &&
            c.annee.localeCompare(params.annee) &&
            c.cycle.localeCompare(params.cycle)
          ) {
            console.log('yeeeeeee');
            this.classe = c;
          }
        });
      });
    } );
    return true;
  }

  private getAllEtudiants(): boolean {
    this.etudiantS.getAll().subscribe(result => {
      this.etudiants = result;
    });
    console.log('getEtudiants done');
    return true;
  }

  private getAllModules(): boolean {
    this.modulesS.getAll().subscribe(result => {
      this.modules = result;
      console.log('getModules done');
    });
    return true;
  }

  private getAllProfs(): boolean {
    this.profsS.getAll().subscribe(result => {
      this.professeurs = result;
      console.log('getProfs done');
    });
    return true;
  }

  private modifyClasseAbsences() {
    this.absencesS.getAll().subscribe(result => {
      this.absences = result;
      this.absences.forEach((a: Absence) => {
        this.etudiants.forEach((e: Etudiant) => {
          if (e.absences.includes(a)) {
            a.nomEtudiant = e.nom;
          }
        });
        this.professeurs.forEach((p: Professeur) => {
          if (p.absences.includes(a)) {
            a.nomProfesseur = p.nom;
          }
        });
        this.modules.forEach((m: Module) => {
          if (m.absences.includes(a)) {
            a.nomModule = m.nom;
          }
        });
      });
    });
    console.log('modifyClasseAbsences done');
  }

  private modifyAbcensesEtudiants() {
    this.etudiants.forEach((e: Etudiant) => {
      e.absences.forEach((ae: Absence) => {
        this.absences.forEach((ab: Absence) => {
          if (ae.id === ab.id) {
            ae = ab;
          }
        });
      });
    });
    console.log('modifyAbcensesEtudiants done');
  }
}

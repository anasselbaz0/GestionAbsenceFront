import { Component, OnInit } from '@angular/core';
import {Module} from '../model/Module';
import {ModuleService} from '../service/module.service';
import {Etudiant} from '../model/Etudiant';
import {EtudiantService} from '../service/etudiant.service';
import {Absence} from '../model/Absence';
import {Ratt} from '../model/Ratt';

@Component({
  selector: 'app-mes-absences',
  templateUrl: './mes-absences.component.html',
  styleUrls: ['./mes-absences.component.css']
})
export class MesAbsencesComponent implements OnInit {

  constructor(
    private modulesService: ModuleService,
    private etuService: EtudiantService
  ) { }

  etudiant: Etudiant;
  modules: Module[] = [];
  nSeances: string[] = [];
  idAbsences: number[] = [];
  ratts: Ratt[] = [];

  ngOnInit() {
    for (let i = 1; i < 31; i++) {
      this.nSeances.push(i.toString());
    }
    this.etuService.getByUsername(sessionStorage.getItem('username')).subscribe(result => {
      this.etudiant = result;
      this.etudiant.absences.forEach((abs: Absence) => {
        this.idAbsences.push(abs.id);
      });
    });
    this.modulesService.getAll().subscribe(result => {
      this.modules = result;
      this.modules.forEach((m: Module) => {
        let nonJus = 0;
        m.absences.forEach((abs: Absence) => {
          if (!abs.isJustified) {
            nonJus++;
          }
        });
        const is = nonJus > 3;
        this.ratts.push({nom: m.nom, rattr: is});
      });
    });
  }

}

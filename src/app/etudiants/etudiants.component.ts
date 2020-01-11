import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Etudiant} from '../model/Etudiant';
import {EtudiantService} from '../service/etudiant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants: Observable<Etudiant[]>;

  constructor(private etudiantService: EtudiantService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.etudiants = this.etudiantService.getAll();
  }
  deleteEtudiant(id: number) {
    console.log(id);
    this.etudiantService.deleteEtudiant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  AjouterEtudiant() {
    this.router.navigateByUrl('etudiant/add' );
  }

}

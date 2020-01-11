import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../model/Etudiant';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {EtudiantService} from '../service/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {

  etudiant: Etudiant;
  constructor(private etudiantService: EtudiantService, private router: Router) { }


  ngOnInit() {
    this.etudiant = new Etudiant();
  }

  save() {
    console.log(this.etudiant);
    this.etudiantService.addEtudiant(this.etudiant).subscribe(result => {
      this.router.navigateByUrl('etudiants');
    });
  }

}

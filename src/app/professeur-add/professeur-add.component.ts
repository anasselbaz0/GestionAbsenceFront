import { Component, OnInit } from '@angular/core';
import {Professeur} from '../model/Professeur';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProfesseurService} from '../service/professeur.service';

@Component({
  selector: 'app-professeur-add',
  templateUrl: './professeur-add.component.html',
  styleUrls: ['./professeur-add.component.css']
})
export class ProfesseurAddComponent implements OnInit {

  prof: Professeur ;

  constructor(private router: Router, private professeurService: ProfesseurService) {
  }
  ngOnInit() {
    this.prof = new Professeur();
  }

  save() {
    this.professeurService.addProfesseur(this.prof).subscribe(result => {
      this.router.navigateByUrl('/professeurs');
    });
  }

}

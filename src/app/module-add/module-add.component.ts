import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Module} from '../model/Module';
import {ModuleService} from '../service/module.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.css']
})
export class ModuleAddComponent implements OnInit {

  constructor(private modS: ModuleService, private router: Router) { }

  addForm = new FormGroup({
    nom: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit() {
    const nom: string = this.addForm.controls.nom.value;
    const module: Module = new Module(nom);
    this.modS.addModule(module).subscribe(result => {
      this.router.navigateByUrl('/modules');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Module} from '../model/Module';
import {ModuleService} from '../service/module.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(private modulesService: ModuleService) { }

  modules: Module[] = [];
  displayedColumns: string[] = ['nom', 'actions'];

  ngOnInit() {
    this.modules = [];
    this.modulesService.getAll().subscribe(result => {
      this.modules = result;
    });
  }

  deleteModule(m: Module) {
    this.modulesService.deleteModule(m).subscribe();
    location.reload();
  }
}

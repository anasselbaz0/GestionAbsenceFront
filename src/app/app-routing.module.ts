import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EspaceEtudiantComponent} from './espace-etudiant/espace-etudiant.component';
import {EspaceAdminComponent} from './espace-admin/espace-admin.component';
import {EspaceProfesseurComponent} from './espace-professeur/espace-professeur.component';
import {MesAbsencesComponent} from './mes-absences/mes-absences.component';
import {ModulesComponent} from './modules/modules.component';
import {ModuleAddComponent} from './module-add/module-add.component';
import {ModuleDeleteComponent} from './module-delete/module-delete.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {path: 'etudiant', component: EspaceEtudiantComponent},
  {path: 'prof', component: EspaceProfesseurComponent},
  {path: 'admin', component: EspaceAdminComponent},
  {path: 'mes-absences', component: EspaceEtudiantComponent},
  {path: 'modules', component: ModulesComponent},
  {path: 'modules/add', component: ModuleAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

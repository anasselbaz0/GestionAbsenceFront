import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EspaceEtudiantComponent} from './espace-etudiant/espace-etudiant.component';
import {EspaceAdminComponent} from './espace-admin/espace-admin.component';
import {EspaceProfesseurComponent} from './espace-professeur/espace-professeur.component';
// import {MesAbsencesComponent} from './mes-absences/mes-absences.component';
import {ModulesComponent} from './modules/modules.component';
import {ModuleAddComponent} from './module-add/module-add.component';
import {ProfesseursComponent} from './professeurs/professeurs.component';
import {ProfesseurAddComponent} from './professeur-add/professeur-add.component';
import {ClassesComponent} from './classes/classes.component';
import {ClasseAddComponent} from './classe-add/classe-add.component';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import {EtudiantAddComponent} from './etudiant-add/etudiant-add.component';
import {ClasseComponent} from './classe/classe.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {path: 'etudiant', component: EspaceEtudiantComponent},
  {path: 'prof', component: EspaceProfesseurComponent},
  {path: 'admin', component: EspaceAdminComponent},
  {path: 'mes-absences', component: EspaceEtudiantComponent},
  {path: 'modules', component: ModulesComponent},
  {path: 'modules/add', component: ModuleAddComponent},
  {path: 'professeurs', component: ProfesseursComponent},
  {path: 'professeur/add', component: ProfesseurAddComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'classe/add', component: ClasseAddComponent},
  {path: 'etudiants', component: EtudiantsComponent},
  {path: 'etudiant/add', component: EtudiantAddComponent},
  {path: 'classe/:cycle/:annee/:filiere/:groupe', component: ClasseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

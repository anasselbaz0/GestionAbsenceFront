import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { EspaceProfesseurComponent } from './espace-professeur/espace-professeur.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModulesComponent } from './modules/modules.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleDeleteComponent } from './module-delete/module-delete.component';
import { AbsencesEtudiantsComponent } from './absences-etudiants/absences-etudiants.component';
import { MesAbsencesComponent } from './mes-absences/mes-absences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatSelectModule, MatCardModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { ProfesseurAddComponent } from './professeur-add/professeur-add.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { ClassesComponent } from './classes/classes.component';
import { ClasseAddComponent } from './classe-add/classe-add.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ClasseComponent } from './classe/classe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EspaceEtudiantComponent,
    EspaceProfesseurComponent,
    EspaceAdminComponent,
    NavbarComponent,
    SidebarComponent,
    ModulesComponent,
    ModuleAddComponent,
    ModuleDeleteComponent,
    AbsencesEtudiantsComponent,
    MesAbsencesComponent,
    ProfesseursComponent,
    ProfesseurAddComponent,
    EtudiantsComponent,
    EtudiantAddComponent,
    ClassesComponent,
    ClasseAddComponent,
    ClasseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

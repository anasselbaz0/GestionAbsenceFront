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
import {MatIconModule, MatSelectModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

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
    MesAbsencesComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

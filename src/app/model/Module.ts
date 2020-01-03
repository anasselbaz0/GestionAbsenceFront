import {Absence} from './Absence';

export class Module {
  id: number;
  nom: string;
  absences: Absence[];

  constructor(nom: string) {
    this.nom = nom;
  }

}

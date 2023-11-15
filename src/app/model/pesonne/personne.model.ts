import { Emploi } from "../emploi/emploi.model";

export interface Personne {
  nom: string;
  prenom: string;
  naissance: string;
  age?: number;
  emplois?: Emploi[];
}

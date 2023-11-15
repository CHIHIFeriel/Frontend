import { PersonneEmploiService } from './../../service/personne/personne-emploi/personne-emploi.service';
import { Component } from '@angular/core';
import { Emploi } from 'src/app/model/emploi/emploi.model';
import { EmploiService } from 'src/app/service/emploi/emploi.service';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/pesonne/personne.model';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent {
  selectedPersonneId: number | undefined;
  emploi: any;
  errorMessage: string = '';
  personnes: any

  constructor(private emploiService: EmploiService, private router: Router, private personneEmploiService:PersonneEmploiService) {
    this.personneEmploiService.selectedPersonne$.subscribe(personne => {
      this.personnes = personne

    });
  }


  ajouterEmploi(): void {
    if (this.selectedPersonneId) {
      this.emploiService.ajouterEmploi(this.selectedPersonneId, this.emploi).subscribe({
        next: (response) => {

          this.router.navigate(['/nouvelle-page']);
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
    }}
}

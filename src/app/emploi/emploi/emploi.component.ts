import { PersonneEmploiService } from './../../service/personne/personne-emploi/personne-emploi.service';
import { Component } from '@angular/core';
import { Emploi } from 'src/app/model/emploi/emploi.model';
import { EmploiService } from 'src/app/service/emploi/emploi.service';
import { Personne } from 'src/app/model/pesonne/personne.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent {
  selectedPersonneId: number | undefined;
  emploiForm: FormGroup;
  emploi: any;
  errorMessage: string = '';
  personnes: any

  constructor(private formBuilder: FormBuilder,
    private emploiService: EmploiService,
    private router: Router,
    private route: ActivatedRoute,
    private personneEmploiService:PersonneEmploiService) {
    this.personneEmploiService.selectedPersonne$.subscribe(personne => {
      this.personnes = personne

    });

    this.emploiForm = this.formBuilder.group({
      nomEntreprise: ['', Validators.required],
      poste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
    });
    this.route.params.subscribe(params => {
      this.selectedPersonneId = params['id'];
    });
  }


  ajoutEmploi(): void {
    if (this.selectedPersonneId) {
      const nomEntreprise = this.emploiForm.get('nomEntreprise')?.value;
      const poste = this.emploiForm.get('poste')?.value;
      const dateDebut = this.emploiForm.get('dateDebut')?.value;
      let dateFin = this.emploiForm.get('dateFin')?.value;

      const empl: Emploi = {
        nomEntreprise: nomEntreprise,
        poste: poste,
        dateDebut: dateDebut,
        dateFin: dateFin
      };

      this.emploiService.ajouterEmploi(this.selectedPersonneId, empl).subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this.errorMessage = error.error.message;
          }
        }
      });
    }
  }

}

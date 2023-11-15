import { PersonneEmploiService } from './../../service/personne/personne-emploi/personne-emploi.service';
import { Component } from '@angular/core';
import { Emploi } from 'src/app/model/emploi/emploi.model';
import { EmploiService } from 'src/app/service/emploi/emploi.service';
import { Personne } from 'src/app/model/pesonne/personne.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


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
      post: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
    });
    this.route.params.subscribe(params => {
      this.selectedPersonneId = params['id'];
    });
  }



  ajoutEmploi(): void {
    if (this.selectedPersonneId) {
      this.emploiService.ajouterEmploi(this.selectedPersonneId, this.emploi).subscribe({
        next: (response) => {
          this.router.navigate(['/vuePersonnes']);
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
    }
  }
}

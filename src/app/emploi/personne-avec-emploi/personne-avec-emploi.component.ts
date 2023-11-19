import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmploiService } from 'src/app/service/emploi/emploi.service';

@Component({
  selector: 'app-personne-avec-emploi',
  templateUrl: './personne-avec-emploi.component.html',
  styleUrls: ['./personne-avec-emploi.component.css']
})
export class PersonneAvecEmploiComponent {
  personneForm: FormGroup;
  personnes: any[] = [];

  constructor(private emploiService: EmploiService, private formBuilder: FormBuilder) {
    this.personneForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getPersonne()
    }

    getPersonne() {

      if (this.personneForm.valid) {
        const dateDebut = this.personneForm.get('dateDebut')?.value;
        const dateFin = this.personneForm.get('dateFin')?.value;
        this.emploiService.getPersonnesAvecEmploi(dateDebut, dateFin).subscribe({
          next: (data) => {

            this.personnes = data;
          },
          error: (error) => {
            console.error('Erreur lors de la récupération des données:', error);
          },
        });
      }
    }

  }

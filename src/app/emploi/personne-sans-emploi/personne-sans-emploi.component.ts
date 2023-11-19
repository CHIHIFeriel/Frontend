import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmploiService } from 'src/app/service/emploi/emploi.service';

@Component({
  selector: 'app-personne-sans-emploi',
  templateUrl: './personne-sans-emploi.component.html',
  styleUrls: ['./personne-sans-emploi.component.css']
})
export class PersonneSansEmploiComponent {
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

      console.log(this.personnes)
      if (this.personneForm.valid) {
        const dateDebut = this.personneForm.get('dateDebut')?.value;
        const dateFin = this.personneForm.get('dateFin')?.value;
        this.emploiService.getPersonnesSansEmploi(dateDebut, dateFin).subscribe({
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

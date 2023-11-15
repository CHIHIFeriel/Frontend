import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmploiService } from 'src/app/service/emploi/emploi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emploi-personne',
  templateUrl: './emploi-personne.component.html',
  styleUrls: ['./emploi-personne.component.css']
})
export class EmploiPersonneComponent {
  emploiPersonne : any;
  personneForm: FormGroup;
  personnes: any[] = [];
  selectedPersonneId: number | undefined;

  constructor(private emploiService: EmploiService, private formBuilder: FormBuilder,private route: ActivatedRoute) {
    this.personneForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.selectedPersonneId = params['id'];
    });
  }
  ngOnInit() {
    this.getPersonne()
    }

  getPersonne(){
    if (this.personneForm.valid && this.selectedPersonneId) {
      const dateDebut = this.personneForm.get('dateDebut')?.value;
      const dateFin = this.personneForm.get('dateFin')?.value;


      this.emploiService.getPersonneEmploi(this.selectedPersonneId, dateDebut, dateFin).subscribe(
        (data) => {
          this.personnes = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des données:', error);
        }
      );
    }
  }
}

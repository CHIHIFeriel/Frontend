import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/model/pesonne/personne.model';
import { PersonneService } from 'src/app/service/personne/personne.service';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent {
  personneForm: FormGroup;
  personne : any;
  errorMessage : string = ''

  constructor(private formBuilder: FormBuilder, private service: PersonneService) {
    this.personneForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      naissance: ['', Validators.required],
    });
  }

  createNewPersonne() {
    if (this.personneForm.valid) {
      const personne: Personne = this.personneForm.value;
      this.service.createPersonne(personne).subscribe({
        next: (response) => {

          console.log(response);
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
    }
  }
}


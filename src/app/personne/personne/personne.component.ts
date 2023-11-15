import { Personne } from 'src/app/model/pesonne/personne.model';
import { PersonneService } from '../../service/personne/personne.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent {
  title = 'angular_Test';
  personnes : any
  constructor(private service: PersonneService) { }

  ngOnInit() {

    this.getPersonne()
    }

  getPersonne(){
    this.service.getPersons().subscribe({
      next: (data) => {
        this.personnes = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    });
  }

  selectPersonne(personne: any): void {
    this.service.selectPersonne(personne);
  }
}

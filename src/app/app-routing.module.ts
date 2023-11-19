import { PersonneSansEmploiComponent } from './emploi/personne-sans-emploi/personne-sans-emploi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne/personne.component';
import { CommonModule } from '@angular/common';
import { CreatePersonneComponent } from './personne/create-personne/create-personne.component';
import { EmploiComponent } from './emploi/emploi/emploi.component';
import { EmploiPersonneComponent } from './emploi/emploi-personne/emploi-personne.component';
import { PersonneAvecEmploiComponent } from './emploi/personne-avec-emploi/personne-avec-emploi.component';
import { PersonneParEmploiComponent } from './emploi/personne-par-emploi/personne-par-emploi.component';

const routes: Routes = [
  { path: '', component: PersonneComponent, title: 'personne'},
  { path: 'newPersonne', component: CreatePersonneComponent, title: 'create Personne'},
  { path: 'newEmploi/:id', component: EmploiComponent, title: 'create Emploi'},
  { path: 'personne/emploi/:id', component: EmploiPersonneComponent, title: 'create Emploi'},
  { path: 'personneSansEmploi', component: PersonneSansEmploiComponent, title: 'Personne sans emploi'},
  { path: 'personneAvecEmploi', component: PersonneAvecEmploiComponent, title: 'Personne Avec emploi'},
  { path: 'personneParEmploi/:nomEntreprise', component: PersonneParEmploiComponent, title: 'Personne par emploi'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

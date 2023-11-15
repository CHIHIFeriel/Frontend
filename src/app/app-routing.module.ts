import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne/personne.component';
import { CommonModule } from '@angular/common';
import { CreatePersonneComponent } from './personne/create-personne/create-personne.component';
import { EmploiComponent } from './emploi/emploi/emploi.component';
import { EmploiPersonneComponent } from './emploi/emploi-personne/emploi-personne.component';

const routes: Routes = [
  { path: '', component: PersonneComponent, title: 'personne'},
  { path: 'newPersonne', component: CreatePersonneComponent, title: 'create Personne'},
  { path: 'newEmploi/:id', component: EmploiComponent, title: 'create Emploi'},
  { path: 'personne/emploi/:id', component: EmploiPersonneComponent, title: 'create Emploi'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

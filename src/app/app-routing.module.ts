import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne/personne.component';
import { CommonModule } from '@angular/common';
import { CreatePersonneComponent } from './personne/create-personne/create-personne.component';

const routes: Routes = [
  { path: 'vuePersonnes', component: PersonneComponent, title: 'personne'},
  { path: 'newPersonne', component: CreatePersonneComponent, title: 'create Personne'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

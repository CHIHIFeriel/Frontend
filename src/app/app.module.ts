import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne/personne.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreatePersonneComponent } from './personne/create-personne/create-personne.component';
import { EmploiComponent } from './emploi/emploi/emploi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmploiPersonneComponent } from './emploi/emploi-personne/emploi-personne.component';
import { PersonneSansEmploiComponent } from './emploi/personne-sans-emploi/personne-sans-emploi.component';
import { PersonneAvecEmploiComponent } from './emploi/personne-avec-emploi/personne-avec-emploi.component';
import { PersonneParEmploiComponent } from './emploi/personne-par-emploi/personne-par-emploi.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    CreatePersonneComponent,
    EmploiComponent,
    EmploiPersonneComponent,
    PersonneSansEmploiComponent,
    PersonneAvecEmploiComponent,
    PersonneParEmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

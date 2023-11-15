import { PersonneEmploiService } from './personne-emploi/personne-emploi.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Personne } from '../../model/pesonne/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private backendHost = 'http://localhost';
  private backendPort = '8001';
  constructor(private http: HttpClient, private personneEmploiService: PersonneEmploiService) { }

  getPersons(): Observable<Personne[]> {
    const headers = { 'content-type': 'application/json'};
  const url = `${this.backendHost}:${this.backendPort}/personne`;

  return this.http.get<Personne[]>(url, { headers }).pipe(
    map(personnes => {
      return personnes.map(personne => ({
        ...personne,
        age: this.calculateAge(personne.naissance),
      }));
    }),
  );
  }

  createPersonne(personne: Personne): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const url = `${this.backendHost}:${this.backendPort}/personne/new`;
    return this.http.post(url, personne, { headers: headers });
  }

  selectPersonne(personne: any): void {
    this.personneEmploiService.setSelectedPersonne(personne);
  }

  private calculateAge(naissance: string): number {
    const birthdate = new Date(naissance);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    return age;
  }
}

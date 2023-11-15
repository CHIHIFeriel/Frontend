import { PersonneEmploiService } from './personne-emploi/personne-emploi.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../../model/pesonne/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private backendHost = 'http://localhost';
  private backendPort = '8000';
  constructor(private http: HttpClient, private personneEmploiService: PersonneEmploiService) { }

  getPersons(): Observable<any> {
    const headers = { 'content-type': 'application/json'}

    const url = `${this.backendHost}:${this.backendPort}/personne`;
    return this.http.get(url,{'headers':headers});
  }

  createPersonne(personne: Personne): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const url = `${this.backendHost}:${this.backendPort}/personne/new`;
    return this.http.post(url, personne, { headers: headers });
  }

  selectPersonne(personne: any): void {
    this.personneEmploiService.setSelectedPersonne(personne);
  }
}

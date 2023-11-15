import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Emploi } from 'src/app/model/emploi/emploi.model';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {
  private backendHost = 'http://localhost';
  private backendPort = '8001';
  constructor(private http: HttpClient) { }

  ajouterEmploi(idPersonne: number, emploi: Emploi | undefined): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const url = `${this.backendHost}:${this.backendPort}/emploi/${idPersonne}/add`;

    return this.http.post(url, emploi, { headers }).pipe(
      catchError((error) => {
        console.error('Erreur dans la requête HTTP:', error);
        throw error;
      })
    );
  }

  getPersons(): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const url = `${this.backendHost}:${this.backendPort}/personne/emploi`;

  return this.http.get(url,{'headers':headers});

  }

  getPersonneEmploi(personneId: number, dateDebut: string, dateFin: string): Observable<any[]> {
    const data = {
        personneId: personneId,
        dateDebut: dateDebut,
        dateFin: dateFin
    };

    const url = `${this.backendHost}:${this.backendPort}/personne/emploi`;

    return this.http.post<any[]>(url, data);
}

}

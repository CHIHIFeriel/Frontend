import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Emploi } from 'src/app/model/emploi/emploi.model';
import { Personne } from 'src/app/model/pesonne/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {
  private backendHost = 'http://localhost';
  private backendPort = '8000';
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

  getPersonneEmploi(personneId: number, dateDebut: string, dateFin: string): Observable<any[]> {
    const data = {
        personneId: personneId,
        dateDebut: dateDebut,
        dateFin: dateFin
    };

    const url = `${this.backendHost}:${this.backendPort}/personne/emploi`;

    return this.http.post<any[]>(url, data);
}

  getPersonnesSansEmploi(dateDebut: string, dateFin: string): Observable<any[]> {
    const data = {
      dateDebut: dateDebut,
      dateFin: dateFin
  };

  const url = `${this.backendHost}:${this.backendPort}/personnesSansEmploi`;

    return this.http.post<any[]>(url, data);
}

  getPersonnesAvecEmploi(dateDebut: string, dateFin: string): Observable<any[]> {
    const data = {
      dateDebut: dateDebut,
      dateFin: dateFin
  };

  const url = `${this.backendHost}:${this.backendPort}/personnesAvecEmploi`;

    return this.http.post<any[]>(url, data);
  }
/*
  getPersonneParEmploi(idEmploi: number, personne: Personne | undefined): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const url = `${this.backendHost}:${this.backendPort}/personnes/${idEmploi}`;

    return this.http.post(url, personne, { headers }).pipe(
      catchError((error) => {
        console.error('Erreur dans la requête HTTP:', error);
        throw error;
      })
    );
  }*/

  getPersonnesParEntreprise(nomEntreprise: string): Observable<any> {
    const url = `${this.backendHost}:${this.backendPort}/personnes/${nomEntreprise}`;
    return this.http.get<any>(url);
  }
}

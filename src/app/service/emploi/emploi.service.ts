import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emploi } from 'src/app/model/emploi/emploi.model';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {
  private backendHost = 'http://localhost';
  private backendPort = '8000';
  constructor(private http: HttpClient) { }

  ajouterEmploi(idPersonne: number, emploi: Emploi | undefined): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const url = `${this.backendHost}:${this.backendPort}/add`;

    return this.http.post(url, emploi, { headers });
  }
}

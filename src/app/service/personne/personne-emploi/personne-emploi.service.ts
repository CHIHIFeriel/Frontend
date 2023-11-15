import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneEmploiService {

  constructor() { }

  private selectedPersonneSource = new BehaviorSubject<any | null>(null);
  selectedPersonne$ = this.selectedPersonneSource.asObservable();

  setSelectedPersonne(personne: any): void {
    this.selectedPersonneSource.next(personne);
  }
}

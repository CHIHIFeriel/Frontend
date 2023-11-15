import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneEmploiService {

  private selectedPersonneSource = new BehaviorSubject<any | null>(null);
  selectedPersonne$ = this.selectedPersonneSource.asObservable();

  setSelectedPersonne(personne: any): void {
    this.selectedPersonneSource.next(personne);
  }
}

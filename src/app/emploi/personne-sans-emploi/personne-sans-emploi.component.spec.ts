import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneSansEmploiComponent } from './personne-sans-emploi.component';

describe('PersonneSansEmploiComponent', () => {
  let component: PersonneSansEmploiComponent;
  let fixture: ComponentFixture<PersonneSansEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneSansEmploiComponent]
    });
    fixture = TestBed.createComponent(PersonneSansEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

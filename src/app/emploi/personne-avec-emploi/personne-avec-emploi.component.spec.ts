import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAvecEmploiComponent } from './personne-avec-emploi.component';

describe('PersonneAvecEmploiComponent', () => {
  let component: PersonneAvecEmploiComponent;
  let fixture: ComponentFixture<PersonneAvecEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneAvecEmploiComponent]
    });
    fixture = TestBed.createComponent(PersonneAvecEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

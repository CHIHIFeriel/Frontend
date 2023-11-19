import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneParEmploiComponent } from './personne-par-emploi.component';

describe('PersonneParEmploiComponent', () => {
  let component: PersonneParEmploiComponent;
  let fixture: ComponentFixture<PersonneParEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneParEmploiComponent]
    });
    fixture = TestBed.createComponent(PersonneParEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

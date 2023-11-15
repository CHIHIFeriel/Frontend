import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiPersonneComponent } from './emploi-personne.component';

describe('EmploiPersonneComponent', () => {
  let component: EmploiPersonneComponent;
  let fixture: ComponentFixture<EmploiPersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploiPersonneComponent]
    });
    fixture = TestBed.createComponent(EmploiPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

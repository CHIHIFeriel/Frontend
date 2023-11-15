import { TestBed } from '@angular/core/testing';

import { PersonneEmploiService } from './personne-emploi.service';

describe('PersonneEmploiService', () => {
  let service: PersonneEmploiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneEmploiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

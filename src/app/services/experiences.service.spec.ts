import { TestBed } from '@angular/core/testing';

import { ExperiencesService } from './experiences.service';

describe('ExperiencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperiencesService = TestBed.get(ExperiencesService);
    expect(service).toBeTruthy();
  });
});

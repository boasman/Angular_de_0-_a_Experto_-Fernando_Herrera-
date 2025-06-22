/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DragonballService } from './dragonball.service';

describe('Service: Dragonball', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonballService]
    });
  });

  it('should ...', inject([DragonballService], (service: DragonballService) => {
    expect(service).toBeTruthy();
  }));
});

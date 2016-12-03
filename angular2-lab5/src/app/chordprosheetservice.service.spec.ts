/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChordprosheetserviceService } from './chordprosheetservice.service';

describe('ChordprosheetserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChordprosheetserviceService]
    });
  });

  it('should ...', inject([ChordprosheetserviceService], (service: ChordprosheetserviceService) => {
    expect(service).toBeTruthy();
  }));
});

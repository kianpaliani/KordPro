/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditpageService } from './editpage.service';

describe('EditpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditpageService]
    });
  });

  it('should ...', inject([EditpageService], (service: EditpageService) => {
    expect(service).toBeTruthy();
  }));
});

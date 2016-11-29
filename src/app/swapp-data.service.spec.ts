/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwappDataService } from './swapp-data.service';

describe('SwappDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwappDataService]
    });
  });

  it('should ...', inject([SwappDataService], (service: SwappDataService) => {
    expect(service).toBeTruthy();
  }));
});

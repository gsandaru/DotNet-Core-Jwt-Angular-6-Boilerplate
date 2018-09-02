import { TestBed, inject } from '@angular/core/testing';

import { TokenInteceptorService } from './token-inteceptor.service';

describe('TokenInteceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInteceptorService]
    });
  });

  it('should be created', inject([TokenInteceptorService], (service: TokenInteceptorService) => {
    expect(service).toBeTruthy();
  }));
});

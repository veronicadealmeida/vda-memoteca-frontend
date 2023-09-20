import { TestBed } from '@angular/core/testing';

import { MockThoughtService } from './mock-thought.service';

describe('MockThoughtService', () => {
  let service: MockThoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockThoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

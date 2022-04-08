import { TestBed } from '@angular/core/testing';

import { SearchVideoService } from './search-video.service';

describe('SearchVideoService', () => {
  let service: SearchVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

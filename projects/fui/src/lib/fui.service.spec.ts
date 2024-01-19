import { TestBed } from '@angular/core/testing';

import { FuiService } from './fui.service';

describe('FuiService', () => {
  let service: FuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

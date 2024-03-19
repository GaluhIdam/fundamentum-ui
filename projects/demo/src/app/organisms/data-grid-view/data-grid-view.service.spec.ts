import { TestBed } from '@angular/core/testing';

import { DataGridViewService } from './data-grid-view.service';

describe('DataGridViewService', () => {
  let service: DataGridViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGridViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgxStripedBackgroundsService } from './ngx-striped-backgrounds.service';

describe('NgxStripedBackgroundsService', () => {
  let service: NgxStripedBackgroundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStripedBackgroundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

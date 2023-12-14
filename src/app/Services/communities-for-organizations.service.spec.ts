import { TestBed } from '@angular/core/testing';

import { CommunitiesForOrganizationsService } from './communities-for-organizations.service';

describe('CommunitiesForOrganizationsService', () => {
  let service: CommunitiesForOrganizationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunitiesForOrganizationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

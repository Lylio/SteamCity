import { TestBed } from '@angular/core/testing';

import { AttendeeService } from './attendee.service';

describe('BikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendeeService = TestBed.get(AttendeeService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { RolewisePermissionGuard } from './rolewise-permission.guard';

describe('RolewisePermissionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolewisePermissionGuard]
    });
  });

  it('should ...', inject([RolewisePermissionGuard], (guard: RolewisePermissionGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthPage } from './admin-auth.page';

describe('AdminAuthPage', () => {
  let component: AdminAuthPage;
  let fixture: ComponentFixture<AdminAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

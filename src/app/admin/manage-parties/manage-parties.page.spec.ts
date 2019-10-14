import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartiesPage } from './manage-parties.page';

describe('ManagePartiesPage', () => {
  let component: ManagePartiesPage;
  let fixture: ComponentFixture<ManagePartiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePartiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePartiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

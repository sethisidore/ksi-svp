import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartiesPage } from './list-parties.page';

describe('ListPartiesPage', () => {
  let component: ListPartiesPage;
  let fixture: ComponentFixture<ListPartiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPartiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

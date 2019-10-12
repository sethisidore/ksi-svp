import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastBallotPage } from './cast-ballot.page';

describe('CastBallotPage', () => {
  let component: CastBallotPage;
  let fixture: ComponentFixture<CastBallotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastBallotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastBallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

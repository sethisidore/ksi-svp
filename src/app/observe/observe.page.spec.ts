import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservePage } from './observe.page';

describe('ObservePage', () => {
  let component: ObservePage;
  let fixture: ComponentFixture<ObservePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObservePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

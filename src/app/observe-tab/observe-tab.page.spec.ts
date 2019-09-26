import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObserveTabPage } from './observe-tab.page';

describe('ObserveTabPage', () => {
  let component: ObserveTabPage;
  let fixture: ComponentFixture<ObserveTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObserveTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObserveTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

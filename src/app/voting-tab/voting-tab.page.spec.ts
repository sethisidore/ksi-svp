import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotingTabPage } from './voting-tab.page';

describe('VotingTabPage', () => {
  let component: VotingTabPage;
  let fixture: ComponentFixture<VotingTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotingTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotingTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

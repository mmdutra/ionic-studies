import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangesPage } from './ranges.page';

describe('RangesPage', () => {
  let component: RangesPage;
  let fixture: ComponentFixture<RangesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

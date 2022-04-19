import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxonDatepickerComponent } from './luxon-datepicker.component';

describe('LuxonDatepickerComponent', () => {
  let component: LuxonDatepickerComponent;
  let fixture: ComponentFixture<LuxonDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxonDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxonDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

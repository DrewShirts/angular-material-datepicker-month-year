import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerViewsSelectionExampleComponent } from './datepicker-views-selection-example.component';

describe('DatepickerViewsSelectionExampleComponent', () => {
  let component: DatepickerViewsSelectionExampleComponent;
  let fixture: ComponentFixture<DatepickerViewsSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerViewsSelectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerViewsSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerViewComponent } from './date-picker-view.component';

describe('DatePickerViewComponent', () => {
  let component: DatePickerViewComponent;
  let fixture: ComponentFixture<DatePickerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatePickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

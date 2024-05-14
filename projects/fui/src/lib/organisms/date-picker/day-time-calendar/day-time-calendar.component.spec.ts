import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTimeCalendarComponent } from './day-time-calendar.component';

describe('DayTimeCalendarComponent', () => {
  let component: DayTimeCalendarComponent;
  let fixture: ComponentFixture<DayTimeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayTimeCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayTimeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

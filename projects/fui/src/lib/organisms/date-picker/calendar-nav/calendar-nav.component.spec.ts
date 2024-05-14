import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarNavComponent } from './calendar-nav.component';

describe('CalendarNavComponent', () => {
  let component: CalendarNavComponent;
  let fixture: ComponentFixture<CalendarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

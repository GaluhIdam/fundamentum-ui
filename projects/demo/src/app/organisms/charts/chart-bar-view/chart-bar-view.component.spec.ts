import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarViewComponent } from './chart-bar-view.component';

describe('ChartBarViewComponent', () => {
  let component: ChartBarViewComponent;
  let fixture: ComponentFixture<ChartBarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartBarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

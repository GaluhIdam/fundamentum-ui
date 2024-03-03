import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadarViewComponent } from './chart-radar-view.component';

describe('ChartRadarViewComponent', () => {
  let component: ChartRadarViewComponent;
  let fixture: ComponentFixture<ChartRadarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRadarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartRadarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCandlestickViewComponent } from './chart-candlestick-view.component';

describe('ChartCandlestickViewComponent', () => {
  let component: ChartCandlestickViewComponent;
  let fixture: ComponentFixture<ChartCandlestickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCandlestickViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartCandlestickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

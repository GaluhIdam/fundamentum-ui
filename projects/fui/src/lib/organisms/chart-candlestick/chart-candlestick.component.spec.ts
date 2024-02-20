import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCandlestickComponent } from './chart-candlestick.component';

describe('ChartCandlestickComponent', () => {
  let component: ChartCandlestickComponent;
  let fixture: ComponentFixture<ChartCandlestickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCandlestickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartCandlestickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

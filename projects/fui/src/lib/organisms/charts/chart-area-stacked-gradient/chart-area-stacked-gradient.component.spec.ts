import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaStackedGradientComponent } from './chart-area-stacked-gradient.component';

describe('ChartAreaStackedGradientComponent', () => {
  let component: ChartAreaStackedGradientComponent;
  let fixture: ComponentFixture<ChartAreaStackedGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAreaStackedGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartAreaStackedGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

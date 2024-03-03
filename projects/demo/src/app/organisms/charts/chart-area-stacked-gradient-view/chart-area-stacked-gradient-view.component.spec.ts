import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaStackedGradientViewComponent } from './chart-area-stacked-gradient-view.component';

describe('ChartAreaStackedGradientViewComponent', () => {
  let component: ChartAreaStackedGradientViewComponent;
  let fixture: ComponentFixture<ChartAreaStackedGradientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAreaStackedGradientViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartAreaStackedGradientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

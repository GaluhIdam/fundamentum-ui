import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaStackedViewComponent } from './chart-area-stacked-view.component';

describe('ChartAreaStackedViewComponent', () => {
  let component: ChartAreaStackedViewComponent;
  let fixture: ComponentFixture<ChartAreaStackedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAreaStackedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartAreaStackedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

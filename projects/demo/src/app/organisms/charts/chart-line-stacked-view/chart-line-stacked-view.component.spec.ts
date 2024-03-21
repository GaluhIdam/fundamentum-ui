import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineStackedViewComponent } from './chart-line-stacked-view.component';

describe('ChartLineStackedViewComponent', () => {
  let component: ChartLineStackedViewComponent;
  let fixture: ComponentFixture<ChartLineStackedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartLineStackedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartLineStackedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

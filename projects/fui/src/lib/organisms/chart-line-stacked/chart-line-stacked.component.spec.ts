import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineStackedComponent } from './chart-line-stacked.component';

describe('ChartLineStackedComponent', () => {
  let component: ChartLineStackedComponent;
  let fixture: ComponentFixture<ChartLineStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartLineStackedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartLineStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

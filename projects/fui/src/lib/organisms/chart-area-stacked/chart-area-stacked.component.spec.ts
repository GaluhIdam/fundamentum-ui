import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaStackedComponent } from './chart-area-stacked.component';

describe('ChartAreaStackedComponent', () => {
  let component: ChartAreaStackedComponent;
  let fixture: ComponentFixture<ChartAreaStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAreaStackedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartAreaStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

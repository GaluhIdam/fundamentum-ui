import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPieDoughnutViewComponent } from './chart-pie-doughnut-view.component';

describe('ChartPieDoughnutViewComponent', () => {
  let component: ChartPieDoughnutViewComponent;
  let fixture: ComponentFixture<ChartPieDoughnutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPieDoughnutViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartPieDoughnutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

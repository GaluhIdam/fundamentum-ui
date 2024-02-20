import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPieDoughnutComponent } from './chart-pie-doughnut.component';

describe('ChartPieDoughnutComponent', () => {
  let component: ChartPieDoughnutComponent;
  let fixture: ComponentFixture<ChartPieDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPieDoughnutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartPieDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

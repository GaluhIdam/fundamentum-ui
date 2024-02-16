import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPieViewComponent } from './chart-pie-view.component';

describe('ChartPieViewComponent', () => {
  let component: ChartPieViewComponent;
  let fixture: ComponentFixture<ChartPieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPieViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartPieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

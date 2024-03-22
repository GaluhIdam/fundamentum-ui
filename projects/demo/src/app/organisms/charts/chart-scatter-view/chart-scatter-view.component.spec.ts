import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartScatterViewComponent } from './chart-scatter-view.component';

describe('ChartScatterViewComponent', () => {
  let component: ChartScatterViewComponent;
  let fixture: ComponentFixture<ChartScatterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartScatterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartScatterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

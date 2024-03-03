import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaViewComponent } from './chart-area-view.component';

describe('ChartAreaViewComponent', () => {
  let component: ChartAreaViewComponent;
  let fixture: ComponentFixture<ChartAreaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAreaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartAreaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

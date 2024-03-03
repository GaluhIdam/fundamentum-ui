import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineViewComponent } from './chart-line-view.component';

describe('ChartLineViewComponent', () => {
  let component: ChartLineViewComponent;
  let fixture: ComponentFixture<ChartLineViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartLineViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartLineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

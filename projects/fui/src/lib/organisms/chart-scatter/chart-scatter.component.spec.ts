import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartScatterComponent } from './chart-scatter.component';

describe('ChartScatterComponent', () => {
  let component: ChartScatterComponent;
  let fixture: ComponentFixture<ChartScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartScatterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

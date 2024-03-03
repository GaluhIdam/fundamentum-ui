import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTreeViewComponent } from './chart-tree-view.component';

describe('ChartTreeViewComponent', () => {
  let component: ChartTreeViewComponent;
  let fixture: ComponentFixture<ChartTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTreeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGroupViewComponent } from './filter-group-view.component';

describe('FilterGroupViewComponent', () => {
  let component: FilterGroupViewComponent;
  let fixture: ComponentFixture<FilterGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGroupViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

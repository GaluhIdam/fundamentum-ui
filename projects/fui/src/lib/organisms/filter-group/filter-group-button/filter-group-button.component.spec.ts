import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGroupButtonComponent } from './filter-group-button.component';

describe('FilterGroupButtonComponent', () => {
  let component: FilterGroupButtonComponent;
  let fixture: ComponentFixture<FilterGroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGroupButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

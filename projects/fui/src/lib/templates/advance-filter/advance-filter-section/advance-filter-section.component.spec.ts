import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFilterSectionComponent } from './advance-filter-section.component';

describe('AdvanceFilterSectionComponent', () => {
  let component: AdvanceFilterSectionComponent;
  let fixture: ComponentFixture<AdvanceFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFilterSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

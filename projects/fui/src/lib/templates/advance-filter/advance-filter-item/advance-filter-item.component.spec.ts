import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFilterItemComponent } from './advance-filter-item.component';

describe('AdvanceFilterItemComponent', () => {
  let component: AdvanceFilterItemComponent;
  let fixture: ComponentFixture<AdvanceFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFilterItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

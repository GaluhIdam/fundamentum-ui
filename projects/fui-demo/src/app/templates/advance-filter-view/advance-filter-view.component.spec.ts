import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFilterViewComponent } from './advance-filter-view.component';

describe('AdvanceFilterViewComponent', () => {
  let component: AdvanceFilterViewComponent;
  let fixture: ComponentFixture<AdvanceFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFilterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

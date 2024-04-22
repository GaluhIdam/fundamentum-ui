import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationViewComponent } from './pagination-view.component';

describe('PaginationViewComponent', () => {
  let component: PaginationViewComponent;
  let fixture: ComponentFixture<PaginationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

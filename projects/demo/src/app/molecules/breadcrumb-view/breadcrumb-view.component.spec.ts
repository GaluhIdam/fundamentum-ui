import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbViewComponent } from './breadcrumb-view.component';

describe('BreadcrumbViewComponent', () => {
  let component: BreadcrumbViewComponent;
  let fixture: ComponentFixture<BreadcrumbViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

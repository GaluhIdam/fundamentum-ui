import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetButtonViewComponent } from './facet-button-view.component';

describe('FacetButtonViewComponent', () => {
  let component: FacetButtonViewComponent;
  let fixture: ComponentFixture<FacetButtonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacetButtonViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacetButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

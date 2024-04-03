import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetButtonComponent } from './facet-button.component';

describe('FacetButtonComponent', () => {
  let component: FacetButtonComponent;
  let fixture: ComponentFixture<FacetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacetButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

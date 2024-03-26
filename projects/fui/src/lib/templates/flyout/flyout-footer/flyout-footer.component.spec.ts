import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutFooterComponent } from './flyout-footer.component';

describe('FlyoutFooterComponent', () => {
  let component: FlyoutFooterComponent;
  let fixture: ComponentFixture<FlyoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyoutFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

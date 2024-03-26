import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutBodyComponent } from './flyout-body.component';

describe('FlyoutBodyComponent', () => {
  let component: FlyoutBodyComponent;
  let fixture: ComponentFixture<FlyoutBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyoutBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyoutBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

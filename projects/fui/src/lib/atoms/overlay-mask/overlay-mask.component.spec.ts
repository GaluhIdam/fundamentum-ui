import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayMaskComponent } from './overlay-mask.component';

describe('OverlayMaskComponent', () => {
  let component: OverlayMaskComponent;
  let fixture: ComponentFixture<OverlayMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayMaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

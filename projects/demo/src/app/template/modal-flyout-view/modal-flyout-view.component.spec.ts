import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFlyoutViewComponent } from './modal-flyout-view.component';

describe('ModalFlyoutViewComponent', () => {
  let component: ModalFlyoutViewComponent;
  let fixture: ComponentFixture<ModalFlyoutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFlyoutViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFlyoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFlyoutComponent } from './modal-flyout.component';

describe('ModalFlyoutComponent', () => {
  let component: ModalFlyoutComponent;
  let fixture: ComponentFixture<ModalFlyoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFlyoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

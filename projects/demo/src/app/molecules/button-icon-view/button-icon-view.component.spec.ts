import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconViewComponent } from './button-icon-view.component';

describe('ButtonIconViewComponent', () => {
  let component: ButtonIconViewComponent;
  let fixture: ComponentFixture<ButtonIconViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonIconViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldTextComponent } from './field-text.component';

describe('InputFieldTextComponent', () => {
  let component: InputFieldTextComponent;
  let fixture: ComponentFixture<InputFieldTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFieldTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldNumberComponent } from './input-field-number.component';

describe('InputFieldNumberComponent', () => {
  let component: InputFieldNumberComponent;
  let fixture: ComponentFixture<InputFieldNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFieldNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputFieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

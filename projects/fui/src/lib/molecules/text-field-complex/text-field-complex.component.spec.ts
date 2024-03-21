import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldComplexComponent } from './text-field-complex.component';

describe('TextFieldComplexComponent', () => {
  let component: TextFieldComplexComponent;
  let fixture: ComponentFixture<TextFieldComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

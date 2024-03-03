import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldComplexViewComponent } from './text-field-complex-view.component';

describe('TextFieldComplexViewComponent', () => {
  let component: TextFieldComplexViewComponent;
  let fixture: ComponentFixture<TextFieldComplexViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldComplexViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldComplexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

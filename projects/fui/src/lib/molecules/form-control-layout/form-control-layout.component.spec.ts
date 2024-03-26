import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlLayoutComponent } from './form-control-layout.component';

describe('FormControlLayoutComponent', () => {
  let component: FormControlLayoutComponent;
  let fixture: ComponentFixture<FormControlLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormControlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

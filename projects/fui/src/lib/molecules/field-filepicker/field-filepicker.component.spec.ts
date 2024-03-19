import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFilepickerComponent } from './field-filepicker.component';

describe('FieldFilepickerComponent', () => {
  let component: FieldFilepickerComponent;
  let fixture: ComponentFixture<FieldFilepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldFilepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldFilepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

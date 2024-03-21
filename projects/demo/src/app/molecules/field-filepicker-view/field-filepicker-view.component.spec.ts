import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFilepickerViewComponent } from './field-filepicker-view.component';

describe('FieldFilepickerViewComponent', () => {
  let component: FieldFilepickerViewComponent;
  let fixture: ComponentFixture<FieldFilepickerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldFilepickerViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldFilepickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

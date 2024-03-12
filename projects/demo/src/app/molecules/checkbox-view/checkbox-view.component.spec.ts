import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxViewComponent } from './checkbox-view.component';

describe('CheckboxViewComponent', () => {
  let component: CheckboxViewComponent;
  let fixture: ComponentFixture<CheckboxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

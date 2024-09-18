import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBoxViewComponent } from './combo-box-view.component';

describe('ComboBoxViewComponent', () => {
  let component: ComboBoxViewComponent;
  let fixture: ComponentFixture<ComboBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboBoxViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

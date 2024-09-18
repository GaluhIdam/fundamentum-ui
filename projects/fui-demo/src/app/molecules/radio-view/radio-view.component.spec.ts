import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioViewComponent } from './radio-view.component';

describe('RadioViewComponent', () => {
  let component: RadioViewComponent;
  let fixture: ComponentFixture<RadioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

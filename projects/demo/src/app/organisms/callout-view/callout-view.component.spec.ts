import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutViewComponent } from './callout-view.component';

describe('CalloutViewComponent', () => {
  let component: CalloutViewComponent;
  let fixture: ComponentFixture<CalloutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalloutViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalloutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverViewComponent } from './popover-view.component';

describe('PopoverViewComponent', () => {
  let component: PopoverViewComponent;
  let fixture: ComponentFixture<PopoverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

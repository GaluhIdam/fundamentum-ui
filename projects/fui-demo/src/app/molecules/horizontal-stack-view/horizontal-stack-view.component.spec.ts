import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStackViewComponent } from './horizontal-stack-view.component';

describe('HorizontalStackViewComponent', () => {
  let component: HorizontalStackViewComponent;
  let fixture: ComponentFixture<HorizontalStackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalStackViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalStackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStackComponent } from './horizontal-stack.component';

describe('HorizontalStackComponent', () => {
  let component: HorizontalStackComponent;
  let fixture: ComponentFixture<HorizontalStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

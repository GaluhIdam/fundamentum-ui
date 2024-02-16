import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBaseComponent } from './progress-base.component';

describe('ProgressBaseComponent', () => {
  let component: ProgressBaseComponent;
  let fixture: ComponentFixture<ProgressBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceViewComponent } from './introduce-view.component';

describe('IntroduceViewComponent', () => {
  let component: IntroduceViewComponent;
  let fixture: ComponentFixture<IntroduceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroduceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

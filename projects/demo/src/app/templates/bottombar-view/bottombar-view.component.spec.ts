import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombarViewComponent } from './bottombar-view.component';

describe('BottombarViewComponent', () => {
  let component: BottombarViewComponent;
  let fixture: ComponentFixture<BottombarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottombarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottombarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

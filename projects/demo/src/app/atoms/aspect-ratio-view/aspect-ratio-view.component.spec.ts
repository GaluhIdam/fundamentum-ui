import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectRatioViewComponent } from './aspect-ratio-view.component';

describe('AspectRatioViewComponent', () => {
  let component: AspectRatioViewComponent;
  let fixture: ComponentFixture<AspectRatioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AspectRatioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AspectRatioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightViewComponent } from './highlight-view.component';

describe('HighlightViewComponent', () => {
  let component: HighlightViewComponent;
  let fixture: ComponentFixture<HighlightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

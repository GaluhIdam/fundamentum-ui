import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexViewComponent } from './flex-view.component';

describe('FlexViewComponent', () => {
  let component: FlexViewComponent;
  let fixture: ComponentFixture<FlexViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

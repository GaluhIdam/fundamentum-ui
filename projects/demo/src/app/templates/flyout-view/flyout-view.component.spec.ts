import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutViewComponent } from './flyout-view.component';

describe('FlyoutViewComponent', () => {
  let component: FlyoutViewComponent;
  let fixture: ComponentFixture<FlyoutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyoutViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlyoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

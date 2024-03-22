import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutHeaderComponent } from './FlyoutHeaderComponent';

describe('FlyoutHeaderComponent', () => {
  let component: FlyoutHeaderComponent;
  let fixture: ComponentFixture<FlyoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyoutHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlyoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

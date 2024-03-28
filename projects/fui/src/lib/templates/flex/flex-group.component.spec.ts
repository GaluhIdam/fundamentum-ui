import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGroupComponent } from './flex-group.component';

describe('FlexComponent', () => {
  let component: FlexGroupComponent;
  let fixture: ComponentFixture<FlexGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

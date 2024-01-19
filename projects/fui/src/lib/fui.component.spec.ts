import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuiComponent } from './fui.component';

describe('FuiComponent', () => {
  let component: FuiComponent;
  let fixture: ComponentFixture<FuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

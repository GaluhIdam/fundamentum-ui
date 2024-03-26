import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrependComponent } from './prepend.component';

describe('PrependComponent', () => {
  let component: PrependComponent;
  let fixture: ComponentFixture<PrependComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrependComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrependComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

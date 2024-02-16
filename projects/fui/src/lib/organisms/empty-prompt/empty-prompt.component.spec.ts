import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPromptComponent } from './empty-prompt.component';

describe('EmptyPromptComponent', () => {
  let component: EmptyPromptComponent;
  let fixture: ComponentFixture<EmptyPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

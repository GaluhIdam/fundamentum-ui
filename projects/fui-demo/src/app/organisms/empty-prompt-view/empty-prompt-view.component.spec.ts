import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPromptViewComponent } from './empty-prompt-view.component';

describe('EmptyPromptViewComponent', () => {
  let component: EmptyPromptViewComponent;
  let fixture: ComponentFixture<EmptyPromptViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyPromptViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyPromptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

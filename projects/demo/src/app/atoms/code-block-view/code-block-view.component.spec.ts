import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockViewComponent } from './code-block-view.component';

describe('CodeBlockViewComponent', () => {
  let component: CodeBlockViewComponent;
  let fixture: ComponentFixture<CodeBlockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBlockViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeBlockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

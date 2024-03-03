import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditViewComponent } from './inline-edit-view.component';

describe('InlineEditViewComponent', () => {
  let component: InlineEditViewComponent;
  let fixture: ComponentFixture<InlineEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

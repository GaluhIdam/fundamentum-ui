import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableViewComponent } from './selectable-view.component';

describe('SelectableViewComponent', () => {
  let component: SelectableViewComponent;
  let fixture: ComponentFixture<SelectableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

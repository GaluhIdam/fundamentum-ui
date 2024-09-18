import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuViewComponent } from './context-menu-view.component';

describe('ContextMenuViewComponent', () => {
  let component: ContextMenuViewComponent;
  let fixture: ComponentFixture<ContextMenuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextMenuViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContextMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

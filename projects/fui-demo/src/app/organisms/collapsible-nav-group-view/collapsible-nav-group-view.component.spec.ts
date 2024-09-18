import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleNavGroupViewComponent } from './collapsible-nav-group-view.component';

describe('CollapsibleNavGroupViewComponent', () => {
  let component: CollapsibleNavGroupViewComponent;
  let fixture: ComponentFixture<CollapsibleNavGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleNavGroupViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapsibleNavGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

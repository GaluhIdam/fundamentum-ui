import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleNavGroupComponent } from './collapsible-nav-group.component';

describe('CollapsibleNavGroupComponent', () => {
  let component: CollapsibleNavGroupComponent;
  let fixture: ComponentFixture<CollapsibleNavGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleNavGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapsibleNavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

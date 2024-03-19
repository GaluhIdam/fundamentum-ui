import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleNavViewComponent } from './collapsible-nav-view.component';

describe('CollapsibleNavViewComponent', () => {
  let component: CollapsibleNavViewComponent;
  let fixture: ComponentFixture<CollapsibleNavViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleNavViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapsibleNavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

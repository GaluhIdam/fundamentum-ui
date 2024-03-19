import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleNavComponent } from './collapsible-nav.component';

describe('CollapsibleNavComponent', () => {
  let component: CollapsibleNavComponent;
  let fixture: ComponentFixture<CollapsibleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapsibleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

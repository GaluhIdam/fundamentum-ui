import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewViewComponent } from './tree-view-view.component';

describe('TreeViewViewComponent', () => {
  let component: TreeViewViewComponent;
  let fixture: ComponentFixture<TreeViewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeViewViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeViewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

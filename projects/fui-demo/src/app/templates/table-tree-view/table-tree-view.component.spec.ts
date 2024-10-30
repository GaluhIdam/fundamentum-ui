import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTreeViewComponent } from './table-tree-view.component';

describe('TableTreeViewComponent', () => {
  let component: TableTreeViewComponent;
  let fixture: ComponentFixture<TableTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTreeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

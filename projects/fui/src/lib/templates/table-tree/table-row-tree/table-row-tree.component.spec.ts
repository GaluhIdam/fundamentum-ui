import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowTreeComponent } from './table-row-tree.component';

describe('TableRowTreeComponent', () => {
  let component: TableRowTreeComponent;
  let fixture: ComponentFixture<TableRowTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRowTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

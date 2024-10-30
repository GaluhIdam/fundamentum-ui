import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataTreeComponent } from './table-data-tree.component';

describe('TableDataTreeComponent', () => {
  let component: TableDataTreeComponent;
  let fixture: ComponentFixture<TableDataTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDataTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

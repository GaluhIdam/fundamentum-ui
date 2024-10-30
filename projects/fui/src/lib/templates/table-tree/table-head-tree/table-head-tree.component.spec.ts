import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadTreeComponent } from './table-head-tree.component';

describe('TableHeadTreeComponent', () => {
  let component: TableHeadTreeComponent;
  let fixture: ComponentFixture<TableHeadTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeadTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHeadTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

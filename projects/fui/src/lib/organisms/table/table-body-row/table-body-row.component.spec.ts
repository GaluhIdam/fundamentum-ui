import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyRowComponent } from './table-body-row.component';

describe('TableBodyRowComponent', () => {
  let component: TableBodyRowComponent;
  let fixture: ComponentFixture<TableBodyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBodyRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBodyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

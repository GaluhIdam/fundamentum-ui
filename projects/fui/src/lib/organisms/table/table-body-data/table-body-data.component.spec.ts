import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyDataComponent } from './table-body-data.component';

describe('TableBodyDataComponent', () => {
  let component: TableBodyDataComponent;
  let fixture: ComponentFixture<TableBodyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBodyDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBodyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

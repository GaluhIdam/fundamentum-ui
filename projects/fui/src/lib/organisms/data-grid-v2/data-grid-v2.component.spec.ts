import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridV2Component } from './data-grid-v2.component';

describe('DataGridV2Component', () => {
  let component: DataGridV2Component;
  let fixture: ComponentFixture<DataGridV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGridV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataGridV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

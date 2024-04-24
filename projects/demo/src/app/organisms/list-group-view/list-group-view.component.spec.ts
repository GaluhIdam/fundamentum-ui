import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupViewComponent } from './list-group-view.component';

describe('ListGroupViewComponent', () => {
  let component: ListGroupViewComponent;
  let fixture: ComponentFixture<ListGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

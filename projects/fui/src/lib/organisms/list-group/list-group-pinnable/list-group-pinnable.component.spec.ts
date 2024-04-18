import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupPinnableComponent } from './list-group-pinnable.component';

describe('ListGroupPinnableComponent', () => {
  let component: ListGroupPinnableComponent;
  let fixture: ComponentFixture<ListGroupPinnableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupPinnableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGroupPinnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

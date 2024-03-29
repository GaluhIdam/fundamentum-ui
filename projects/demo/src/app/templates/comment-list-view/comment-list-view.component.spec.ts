import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListViewComponent } from './comment-list-view.component';

describe('CommentListViewComponent', () => {
  let component: CommentListViewComponent;
  let fixture: ComponentFixture<CommentListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

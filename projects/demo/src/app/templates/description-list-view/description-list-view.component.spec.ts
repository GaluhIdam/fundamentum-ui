import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionListViewComponent } from './description-list-view.component';

describe('DescriptionListViewComponent', () => {
  let component: DescriptionListViewComponent;
  let fixture: ComponentFixture<DescriptionListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableContainerViewComponent } from './resizable-container-view.component';

describe('ResizableContainerViewComponent', () => {
  let component: ResizableContainerViewComponent;
  let fixture: ComponentFixture<ResizableContainerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizableContainerViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResizableContainerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

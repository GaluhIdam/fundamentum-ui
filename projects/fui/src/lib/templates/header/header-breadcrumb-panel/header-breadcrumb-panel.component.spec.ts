import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBreadcrumbPanelComponent } from './header-breadcrumb-panel.component';

describe('HeaderBreadcrumbPanelComponent', () => {
  let component: HeaderBreadcrumbPanelComponent;
  let fixture: ComponentFixture<HeaderBreadcrumbPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBreadcrumbPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBreadcrumbPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitewideViewComponent } from './sitewide-view.component';

describe('SitewideViewComponent', () => {
  let component: SitewideViewComponent;
  let fixture: ComponentFixture<SitewideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitewideViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitewideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

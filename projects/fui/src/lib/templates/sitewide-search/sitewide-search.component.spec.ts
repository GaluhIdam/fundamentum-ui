import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitewideSearchComponent } from './sitewide-search.component';

describe('SitewideSearchComponent', () => {
  let component: SitewideSearchComponent;
  let fixture: ComponentFixture<SitewideSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitewideSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitewideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

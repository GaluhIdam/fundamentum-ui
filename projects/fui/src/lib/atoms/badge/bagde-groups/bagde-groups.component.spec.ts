import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagdeGroupsComponent } from './bagde-groups.component';

describe('BagdeGroupsComponent', () => {
  let component: BagdeGroupsComponent;
  let fixture: ComponentFixture<BagdeGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagdeGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagdeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsFeaturedComponent } from './groups-featured.component';

describe('GroupsFeaturedComponent', () => {
  let component: GroupsFeaturedComponent;
  let fixture: ComponentFixture<GroupsFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GroupsFeaturedComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GroupsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsFeaturedComponent } from './friends-featured.component';

describe('FriendsFeaturedComponent', () => {
  let component: FriendsFeaturedComponent;
  let fixture: ComponentFixture<FriendsFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FriendsFeaturedComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(FriendsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

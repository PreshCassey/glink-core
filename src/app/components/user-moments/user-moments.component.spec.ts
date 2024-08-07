import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMomentsComponent } from './user-moments.component';

describe('UserMomentsComponent', () => {
  let component: UserMomentsComponent;
  let fixture: ComponentFixture<UserMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserMomentsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UserMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

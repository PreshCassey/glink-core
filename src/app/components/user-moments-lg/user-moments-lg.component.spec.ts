import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMomentsLgComponent } from './user-moments-lg.component';

describe('UserMomentsLgComponent', () => {
  let component: UserMomentsLgComponent;
  let fixture: ComponentFixture<UserMomentsLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserMomentsLgComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UserMomentsLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

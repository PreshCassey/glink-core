import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDevotionalsComponent } from './daily-devotionals.component';

describe('DailyDevotionalsComponent', () => {
  let component: DailyDevotionalsComponent;
  let fixture: ComponentFixture<DailyDevotionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DailyDevotionalsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DailyDevotionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

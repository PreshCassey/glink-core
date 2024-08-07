import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLgComponent } from './event-lg.component';

describe('EventLgComponent', () => {
  let component: EventLgComponent;
  let fixture: ComponentFixture<EventLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EventLgComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EventLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

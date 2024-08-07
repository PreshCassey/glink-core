import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }
}

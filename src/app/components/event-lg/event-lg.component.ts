import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import {Event} from '../../models/event.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'event-lg',
  templateUrl: './event-lg.component.html',
  styleUrls: ['./event-lg.component.scss'],
  imports: [ CommonModule]
})
export class EventLgComponent implements OnInit {
  featuredEvents: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getFiveFeaturedEvents().subscribe(events => {
      this.featuredEvents = events;

    });
  }
}

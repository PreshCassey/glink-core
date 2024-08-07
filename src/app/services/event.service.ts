import { Injectable } from '@angular/core';
import { Event } from '../models/event.model'; // Import the Event interface
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private SERVER_URL = environment.serverURL;
  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.SERVER_URL}/api/events`);
  }

  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.SERVER_URL}/api/events/${id}`);
  }

  // Method to get five featured event data entries
  getFiveFeaturedEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.SERVER_URL}/api/events`);
  }
}

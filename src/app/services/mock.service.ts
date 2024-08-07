import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { events } from '../data/sample-events-data';
import { friends } from '../data/sample-friends.data';
import { groups } from '../data/sample-groups.data';
import { hymn } from '../data/sample-hymn-library.data';
import { moments } from '../data/sample-user-moments.data';
@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      events,
      friends,
      groups,
      hymn,
      moments
    }
  }
}

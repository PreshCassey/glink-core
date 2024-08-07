import { Injectable } from '@angular/core';
import { Group } from '../models/groups.model'; // Import the Group interface
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private SERVER_URL = environment.serverURL;
  constructor(private httpClient: HttpClient) {}

  getAllGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.SERVER_URL}/api/groups`);
  }

  getGroupById(id: number): Observable<Group> {
    return this.httpClient.get<Group>(`${this.SERVER_URL}/api/groups/${id}`);
  }

  // Method to get three featured group data entries
  getThreeFeaturedGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.SERVER_URL}/api/groups`);
  }
}

import { Injectable } from '@angular/core';
import { Friend } from '../models/friends.model'; // Import the Friend interface
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private SERVER_URL = environment.serverURL;
  constructor(private httpClient: HttpClient) {}

  getAllFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(`${this.SERVER_URL}/api/friends`);
  }

  getFriendById(id: number): Observable<Friend> {
    return this.httpClient.get<Friend>(`${this.SERVER_URL}/api/friends/${id}`);
  }

  getThreeFeaturedFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(`${this.SERVER_URL}/api/friends`);
  }
}

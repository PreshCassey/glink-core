import { Injectable } from '@angular/core';
import { Moment } from "../models/user-moments.model";
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserMomentsService {
  private SERVER_URL = environment.serverURL;
  constructor(private httpClient: HttpClient) {}

  // Get all moments
  getAllMoments(): Observable<Moment[]> {
    return this.httpClient.get<Moment[]>(`${this.SERVER_URL}/api/moments`);
  }

  // Get a single moment
  getMomentById(id: number): Observable<Moment> {
    return this.httpClient.get<Moment>(`${this.SERVER_URL}/api/moments/${id}`);

  }

  // Get five featured moments
  getFiveFeaturedMoments(): Observable<Moment[]> {
    return this.httpClient.get<Moment[]>(`${this.SERVER_URL}/api/moments`);
  }
}

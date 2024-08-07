import { Injectable } from '@angular/core';
import { Hymn } from '../models/hymn-library.model'; // Import the Event interface
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HymnLibraryService {
  private SERVER_URL = environment.serverURL;
  constructor(private httpClient: HttpClient) {}

  getAllHymns(): Observable<Hymn[]> {
    return this.httpClient.get<Hymn[]>(`${this.SERVER_URL}/api/hymn`);
  }

  getHymnById(id: number): Observable<Hymn> {
    return this.httpClient.get<Hymn>(`${this.SERVER_URL}/api/hymn/${id}`);
  }

  // Method to get three featured hymn data entries
  getThreeFeaturedHymns(): Observable<Hymn[]> {
    return this.httpClient.get<Hymn[]>(`${this.SERVER_URL}/api/hymn`);
  }
}

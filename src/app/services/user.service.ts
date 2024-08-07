import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users'; // URL to web api

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .get<User>(url)
      .pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  // addUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.usersUrl, user, HttpParamsOptions)
  //     .pipe(
  //       catchError(this.handleError<User>('addUser'))
  //     );
  // }

  // deleteUser(user: User | number): Observable<User> {
  //   const id = typeof user === 'number' ? user : user.id;
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http.delete<User>(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError<User>('deleteUser'))
  //     );
  // }

  // updateUser(user: User): Observable<any> {
  //   return this.http.put(this.usersUrl, user, httpOptions)
  //     .pipe(
  //       catchError(this.handleError<any>('updateUser'))
  //     );
  // }

  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<User[]>(`${this.usersUrl}/?name=${term}`)
      .pipe(catchError(this.handleError<User[]>('searchUsers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error', error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
// import { environment } from '../../environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckEmailService {
  SERVER_URL = environment.serverURL;

  constructor(private httpClient: HttpClient) {}

  searchEmail(text: any) {
    return timer(2000).pipe(
      switchMap(() =>
        this.httpClient.get(`${this.SERVER_URL}/user/validate/${text}`)
      )
    ); // PIPE ENDS HERE
  }

  searchEmailUser(userId: number, text: any) {
    return timer(2000).pipe(
      switchMap(() =>
        this.httpClient.get(
          `${this.SERVER_URL}/user/validate/${text}/${userId}`
        )
      )
    ); // PIPE ENDS HERE
  }

  emailValidatorUser(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.searchEmail(control.value).pipe(
        map((res?: { message?: string; status?: boolean; user?: User }) => {
          if (res?.status && res.user?.email !== control.value) {
            return { taken: true };
          }
          return null;
        })
      ); // PIPE ENDS HERE
    };
  }

  emailValidate(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.searchEmail(control.value).pipe(
        map((res?: { message?: string; status?: boolean; user?: object }) => {
          if (res?.status) {
            return { taken: true };
          }
          return null;
        })
      ); // PIPE ENDS HERE
    };
  }
}

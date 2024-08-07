import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HideComponentsGuard  {
  canActivateActivated: boolean = true;

  constructor(private router: Router) {}

  setCanActivateActivated(value: boolean) {
    this.canActivateActivated = value;
  }

  getCanActivateActivated() {
    return this.canActivateActivated;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Check if the route is signup or signin
    if (state.url.includes('/signup') || state.url.includes('/signin')) {
      this.setCanActivateActivated(true);
      return this.router.parseUrl('/' + state.url.split('/')[1]);
    } else {
      this.setCanActivateActivated(false);
      return true;
    }
  }
}

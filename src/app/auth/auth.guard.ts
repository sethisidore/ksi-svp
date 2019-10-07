import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let status: boolean;
    this.auth.isLoggedIn().then(status => {
      status = status;
    });
    if (status) {
      return true;
    }
    /**
     * this.auth.redirectUrl = url;
     *
     * Create dummy session id
     * let sessionId = 323424;
     *
     * set navigation extras
     * let navigationExtras: NavigationExtras = {
     *  queryParams: { 'session_id': sessionId }, fragment: 'anchor' };
     * }
     *
     * Navigate to login page with extras
     * this.router.navigate(['/login', navigationExtras]);
     *
     */
    this.router.navigate(['/login']);
    return false;
  }
}

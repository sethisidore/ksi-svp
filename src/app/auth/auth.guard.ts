import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private nav: NavController,
    private auth: AuthService
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

  checkLogin(url: string) {
    if (this.auth.isLoggedIn()) {
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
    this.nav.navigateRoot('/welcome');
    return false;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticatorService } from './authenticator.service';
AuthenticatorService
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _Router:Router ,private _AuthenticatorService:AuthenticatorService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._AuthenticatorService.userData.getValue() != null)
      {
        return true;

      }
      else
      {
        this._Router.navigate(['/LOGIN'])

        return false;

        }
  }

}

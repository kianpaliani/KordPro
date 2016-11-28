import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }
  
  canActivate(): boolean {
    if (this.loginService.loggedIn) {
        return true;
    } else {
        this.router.navigateByUrl('/home');
        return false;
    }
  }

}

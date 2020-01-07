import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthoService} from '../Service/autho.service';


@Injectable({
  providedIn: 'root'
})
export class NonAdminGuard implements CanActivate {
  constructor(private mainService: AuthoService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean   {
    if (!this.mainService.isAdminUser()) {
      return true;
    }
    // @ts-ignore
    this.router.navigate(['/clientDashboard'])
    return false;
  }
}

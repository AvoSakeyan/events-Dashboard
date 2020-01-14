import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthoService} from '../Service/autho.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private mainService: AuthoService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.mainService.isAdminUser()) {
      return true;
    }
    this.router.navigate(['/adminDashboard']);
    return false;
  }
}

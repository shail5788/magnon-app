import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./../shared/authservice/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolewisePermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

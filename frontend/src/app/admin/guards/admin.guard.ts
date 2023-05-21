import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isUserLoggedIn() && this.authService.getRole()) {
        return true;
    } 
    else if (this.authService.isUserLoggedIn() && !this.authService.getRole()) {
      this.router.navigate(['/']);
      return false;
    }
    else {
        this.router.navigate(['/login']);
        return false;
      }
    
  }
}

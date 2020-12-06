import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthModGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(): boolean {
        if (this.authService.getRol() === 'moderator') {
            return true;
        } else {
            this.router.navigate(['/acceder/empresa']);
        }
    }
}

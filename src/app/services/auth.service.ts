import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserFound;

  private URL = 'http://localhost:4000/api/auth';

  private pharmURL = 'http://localhost:4000/api/farmacias';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User): any {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: User): any {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  signUpPharm(pharm): any {
    return this.http.post<any>(this.pharmURL, pharm);
  }

  signInPharm(pharm): any {
    return this.http.post<any>(this.URL + '/signin/pharmacy', pharm);
  }

  getRol(): any {
    return localStorage.getItem('rol');
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }


  loggout(): any {

    if (localStorage.getItem('rol') === 'admin' || localStorage.getItem('rol') === 'moderator') {
      this.router.navigate(['/acceder/empresa']);
    } else {
      this.router.navigate(['/acceder']);
    }

    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('name');
  }
}




import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rolUsuario = 'random user';

  private URL = 'http://localhost:4000/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User): any {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: User): any {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }


  loggout(): any {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['/acceder']);
  }
}




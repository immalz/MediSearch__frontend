import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://localhost:4000/api/usuario';

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get(this.URL);
  }
  getUsersCount(): any {
    return this.http.get(this.URL + '/count');
  }

  getRoles(id: string): any {
    return this.http.get<any>(this.URL + `/${id}`);
  }


}

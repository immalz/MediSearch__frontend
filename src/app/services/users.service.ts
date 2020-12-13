import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://localhost:4000/api/usuario';
  private pharmURL = 'http://localhost:4000/api/farmacias';

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

  getLastUser(): any {
    return this.http.get<any>(this.URL + '/last');
  }

  getLastPharm(): any {
    return this.http.get<any>(this.pharmURL + '/last');
  }

  getPharmacy(): any {
    return this.http.get(this.pharmURL);
  }
  getPharmacyCount(): any {
    return this.http.get(this.pharmURL + '/count');
  }

  deleteUser(id: string): any {
    return this.http.delete(this.URL + `/${id}`);
  }


}

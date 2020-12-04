import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import PharmRequest from '../interfaces/PharmRequest';

@Injectable({
  providedIn: 'root'
})
export class PharmsService {

  private URL = 'http://localhost:4000/api/farmacias/request';
  constructor(private http: HttpClient) { }

  createRequestPharm(pharmacy): any {
    return this.http.post(this.URL, pharmacy);
  }

  getRequestPharms(): any {
    return this.http.get(this.URL);
  }

  deleteRequestPharms(id: string): any {
    return this.http.delete(`${this.URL}/${id}`);
  }
}

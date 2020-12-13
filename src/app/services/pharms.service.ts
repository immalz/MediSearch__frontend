import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import PharmRequest from '../interfaces/PharmRequest';

@Injectable({
  providedIn: 'root'
})
export class PharmsService {

  imgURL: string;
  id: string;
  name: string;
  email: string;
  address: string;
  imgPharm: string;

  private URL = 'http://localhost:4000/api/farmacias/request';
  private pharmURL = 'http://localhost:4000/api/farmacias/';
  constructor(private http: HttpClient) { }

  createRequestPharm(pharmacy): any {
    return this.http.post(this.URL, pharmacy);
  }

  getRequestPharms(): any {
    return this.http.get(this.URL);
  }

  getSinglePharm(id: string): any {
    return this.http.get(`${this.pharmURL}/${id}`);
  }

  updatePharm(pharmacy, id): any {
    return this.http.put(`${this.pharmURL}/${id}`, pharmacy);
  }

  deletePharmacy(id: string): any {
    return this.http.delete(`${this.pharmURL}/${id}`);
  }

  deleteRequestPharms(id: string): any {
    return this.http.delete(`${this.URL}/${id}`);
  }

  getCountMedicines(id: string): any {
    return this.http.get(`${this.pharmURL}/medicine/count/${id}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Medicine from '../interfaces/Medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private URL = 'http://localhost:4000/api/medicamentos';

  constructor(private http: HttpClient) { }

  createMedicine(medicine: Medicine, imgURL: File): any {

    const fd = new FormData();
    fd.append('name', medicine.name);
    fd.append('category', medicine.category);
    fd.append('type', medicine.type);
    fd.append('company', medicine.company);
    fd.append('price', medicine.price);
    fd.append('imgURL', imgURL);

    return this.http.post(this.URL, fd);
  }

  getMedicines(): any {
    return this.http.get<Medicine[]>(this.URL);
  }

  getMedicineCount(): any {
    return this.http.get(this.URL + '/count');
  }

  getMedicine(id: string): any {
    return this.http.get<Medicine>(`${this.URL}/${id}`);
  }

  deleteMedicine(id: string): any {
    return this.http.delete(`${this.URL}/${id}`);
  }

  searchMedicine(name: string): any {
    return this.http.get(this.URL + `/searchMedicine/${name}`);
  }

  updateMedicine(id: string, name: string, category: string, type: string, company: string, price: string): any {
    return this.http.put(`${this.URL}/${id}`, {name, category, type, company, price});
  }

}

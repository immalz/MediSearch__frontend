import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Medicine from '../interfaces/Medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private URL = 'http://localhost:4000/api/medicamentos';

  constructor(private http: HttpClient) { }

  createMedicine(medicine: Medicine, imgURL: File, id: string): any {

    const fd = new FormData();
    fd.append('name', medicine.name);
    fd.append('category', medicine.category);
    fd.append('type', medicine.type);
    fd.append('maker', medicine.maker);
    fd.append('unit_package', medicine.unitPackage);
    fd.append('price', medicine.price);
    fd.append('condition', medicine.condition);
    fd.append('imgURL', imgURL);

    return this.http.post(`${this.URL}/${id}`, fd);
  }

  getMedicines(): any {
    return this.http.get<Medicine[]>(this.URL);
  }

  getMedicineForPharmacy(id: string): any {
    return this.http.get(`${this.URL}/pharmacy/${id}`);
  }
  getMedicineCount(): any {
    return this.http.get(this.URL + '/count');
  }

  getLastMedicine(): any {
    return this.http.get<any>(this.URL + '/last');
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

  // tslint:disable-next-line: max-line-length
  updateMedicine(id: string, name: string, category: string, type: string, price: string, unitPackage: string, condition: string, maker: string): any {
    return this.http.put(`${this.URL}/${id}`, {name, category, type, price, unitPackage, condition, maker});
  }

}

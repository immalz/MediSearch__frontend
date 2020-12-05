import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  lat: number;
  lng: number;
  nameCompany: string;
  imgURL: string;

  constructor() { }
}

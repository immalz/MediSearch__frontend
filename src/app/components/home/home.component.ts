import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../services/medicines.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ms: MedicinesService) { }

  medicines = [];
  medicineFound = [];

  searching = false;

  ngOnInit(): void {

    this.ms.getMedicines()
      .subscribe(
        res => {this.medicines = res; },
        err => { console.log(err); }
      );
  }

  searchMedicine(name: string): any {
    const capitalize = this.titleCaseWord(name);
    this.searching = true;
    this.ms.searchMedicine(capitalize).pipe(debounceTime(300))
      .subscribe((data: any) => {
        this.medicineFound = data;
        console.log(data);
      });

    if (this.medicineFound.length === 0) {
        this.searching = false;
      }
  }

  titleCaseWord(word: string): any {
    if (!word) { return word; }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}

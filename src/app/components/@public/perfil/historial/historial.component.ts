import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements AfterViewInit {

  ELEMENT_DATA = [
    {Orden: 2343, Productos: 'Ensure Advance', Fecha: '06/06/18', Monto: 125},
    {Orden: 1232, Productos: 'Panadol Forte', Fecha: '05/02/19', Monto: 32},
    {Orden: 3212, Productos: 'Amoxicilina', Fecha: '20/07/19', Monto: 23},
    {Orden: 6432, Productos: 'Enfagron Premium', Fecha: '04/12/20', Monto: 15},
    {Orden: 7263, Productos: 'Diclofenaco', Fecha: '12/12/20', Monto: 25},
    {Orden: 1232, Productos: 'Panadol Forte', Fecha: '05/02/19', Monto: 32},
    {Orden: 6432, Productos: 'Enfagron Premium', Fecha: '04/12/20', Monto: 15},
    {Orden: 1232, Productos: 'Panadol Forte', Fecha: '05/02/19', Monto: 32},
    {Orden: 3212, Productos: 'Amoxicilina', Fecha: '20/07/19', Monto: 23},
    {Orden: 2343, Productos: 'Diclofenaco', Fecha: '12/12/20', Monto: 25},
    {Orden: 2343, Productos: 'Ensure Advance', Fecha: '06/06/18', Monto: 125},
    {Orden: 3212, Productos: 'Amoxicilina', Fecha: '20/07/19', Monto: 23},
    {Orden: 2343, Productos: 'Ensure Advance', Fecha: '06/06/18', Monto: 125},
    {Orden: 2343, Productos: 'Diclofenaco', Fecha: '12/12/20', Monto: 25},
    {Orden: 6432, Productos: 'Enfagron Premium', Fecha: '04/12/20', Monto: 15},
  ];

  displayedColumns: string[] = ['Orden', 'Productos', 'Fecha', 'Monto', 'tools'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

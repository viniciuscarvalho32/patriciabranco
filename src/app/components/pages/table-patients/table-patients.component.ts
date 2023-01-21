import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablePatientsDataSource, TablePatientsItem } from './table-patients-datasource';

@Component({
  selector: 'app-table-patients',
  templateUrl: './table-patients.component.html',
  styleUrls: ['./table-patients.component.css']
})
export class TablePatientsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablePatientsItem>;
  dataSource: TablePatientsDataSource;
  @Input() pacientes: [] = [];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  @Input() patients:any[] = [];

  constructor() {
    this.dataSource = new TablePatientsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

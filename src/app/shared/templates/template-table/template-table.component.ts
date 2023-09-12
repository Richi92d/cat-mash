import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cat } from 'src/app/cat/interface/cat.interface';

@Component({
  selector: 'app-template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.scss']
})
export class TemplateTableComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() public columns: string[] = [];
  @Input() public ratingCats: Cat[] = [];

  public dataSource: MatTableDataSource<Cat>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Cat>(this.ratingCats);
    this.dataSource.sort = this.sort;
  }

}
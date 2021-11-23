import { Component, Input, OnInit } from '@angular/core';
import { DataComponent } from 'src/app/data.compoent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, DataComponent {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}

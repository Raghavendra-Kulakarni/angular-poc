import { Component, Input, OnInit } from '@angular/core';
import { DataComponent } from 'src/app/data.compoent';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,DataComponent {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}

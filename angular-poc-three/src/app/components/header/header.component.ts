import { Component, Input, OnInit } from '@angular/core';
import { DataComponent } from 'src/app/data.compoent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DataComponent {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}

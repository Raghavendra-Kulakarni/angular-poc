import { Component, Input, OnInit } from '@angular/core';
import { DataComponent } from 'src/app/data.compoent';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit,DataComponent {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}

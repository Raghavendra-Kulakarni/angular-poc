import { Component, Input, OnInit } from '@angular/core';
import { DataComponent } from 'src/app/data.compoent';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit,DataComponent {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}

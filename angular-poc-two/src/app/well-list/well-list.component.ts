import { Component, OnInit } from '@angular/core';
import {Well } from './well.model'
@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  wells : Well[] = [{
    name : 'TestRLSWell01',
    type : 'rls',
    sourceKey : 100001
  },
  {
    name : 'TestESPWell01',
    type : 'esp',
    sourceKey : 100001
  },{
    name : 'TestRLSWell01',
    type : 'rls',
    sourceKey : 100001
  },{
    name : 'newrlswell',
    type : 'rls',
    sourceKey : 101010101
  }];
  sourceKey  = this.wells[0].sourceKey;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event){
    this.sourceKey = +event.target.innerText;
  }

  onAdd(event){
    this.wells.push({...event,sourceKey : this.sourceKey})
  }

}

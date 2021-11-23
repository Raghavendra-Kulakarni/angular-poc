import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Well } from '../well.model'
@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  @Input() sourceKey : number;
  @ViewChild('name') name : ElementRef;
  @ViewChild('type') type : ElementRef;
  @Output() addWell = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addWell.emit({name : this.name.nativeElement.value,type : this.type.nativeElement.value});
  }


}

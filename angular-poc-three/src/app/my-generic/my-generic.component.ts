import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ComponentItem } from '../component-item';
import { DataComponent } from '../data.compoent';
import { componentHostDirective } from '../directive/componentHost.directive';

@Component({
  selector: 'app-my-generic',
  templateUrl: './my-generic.component.html',
  styleUrls: ['./my-generic.component.css']
})
export class MyGenericComponent implements OnInit {

  @Input() components: ComponentItem[] = [];
  @ViewChild(componentHostDirective, {static: true}) componentHost!: componentHostDirective;

  constructor() { }

  ngOnInit() {
    this.loadComponent(0);
  }

  loadComponent(i : number) {
    const componentItem = this.components[i];
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<DataComponent>(componentItem.component);
    componentRef.instance.data = componentItem.data;
  }

  onDragStart(event :any,i : number){
    event.dataTransfer.setData('key',i);
  }

  onDragOver(event:any){
    event.preventDefault();
  }

  onDropComponent(event:any){
    event.preventDefault();
    let item = event.dataTransfer.getData('key');
    this.loadComponent(item);
  }


}

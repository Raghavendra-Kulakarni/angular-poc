import { Component, OnInit } from '@angular/core';
import { ComponentItem } from './component-item';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  components : ComponentItem[] = [];

  constructor(private appService : AppService){

  }

  ngOnInit(){
    this.components = this.appService.getComponents();
  }
}

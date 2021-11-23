import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { USER_DATA } from './users.mock';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];
  flag : boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.users = USER_DATA;
  }

  onClick(){
    this.flag = !this.flag;
  }

}

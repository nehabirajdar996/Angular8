import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userName : string = '';
userList =[];

  constructor() { }

  ngOnInit() {
  }

  onUserAdded(event:string)
  {
    this.userList.push(event);
  }
  // adduser(){
  //   this.userList.push(this.userName)
  // }
}

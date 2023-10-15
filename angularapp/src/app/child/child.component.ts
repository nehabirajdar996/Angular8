import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  userName: string
 usersList = [];
  constructor() { 

  }

  onUserAdded(){
    this.usersList.push(this.userName)
  }
  ngOnInit() {


  }

}

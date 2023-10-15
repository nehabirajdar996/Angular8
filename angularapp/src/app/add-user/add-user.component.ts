import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
@Output()  userAdded = new EventEmitter();
userName : string;
  constructor() { }

  ngOnInit() {
  }

  onUserAdded(){
    this.userAdded.emit(this.userName)
  }
}

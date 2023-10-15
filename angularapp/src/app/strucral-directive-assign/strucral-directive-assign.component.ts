import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strucral-directive-assign',
  templateUrl: './strucral-directive-assign.component.html',
  styleUrls: ['./strucral-directive-assign.component.css']
})
export class StrucralDirectiveAssignComponent implements OnInit {
 
 
  constructor() { }

  ngOnInit() {
  }


  select = false;

  onChange(){
  this.select = !this.select
  }
}

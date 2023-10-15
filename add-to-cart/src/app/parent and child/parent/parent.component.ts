import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentName = 'neha birajdar';
  
  constructor() { }

  ngOnInit() {
  }
  // move(values){
  //  console.log(values)
  // }

}

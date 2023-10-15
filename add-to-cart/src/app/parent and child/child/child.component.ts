import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() name = '';
// @Output() newItemEvent:EventEmitter<string> = new EventEmitter<string>;
// 


  constructor() { }

  ngOnInit() {
  }

 
 // add(){
  //   this.newItemEvent.emit('Angular Devloper')
  // }
}

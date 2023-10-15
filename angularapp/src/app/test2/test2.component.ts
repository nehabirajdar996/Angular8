
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
name : string = 'Rocky';
count :string = '100';
  
constructor() { }
 
  ngOnInit(){
    
  }

  GetDataFromChild(data) {
    console.log('from child', data);
  }
}




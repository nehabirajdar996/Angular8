import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-assign',
  templateUrl: './form-assign.component.html',
  styleUrls: ['./form-assign.component.css']
})
export class FormAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
city:string[] = [
  'Mumbail','Kolkata','Delhi'
]
defgender = 'Male';

genderArr = [
  {
    id:'1' ,value:'Male'
  },
  {
    id:'2' ,value:'female'
  }
]
// onage(value){

//     if (value < 17 && value > 20) {
    
      
//     }
  }


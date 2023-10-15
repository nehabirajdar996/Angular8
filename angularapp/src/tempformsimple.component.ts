import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempformsimple',
  templateUrl: './tempformsimple.component.html',
  styleUrls: ['./tempformsimple.component.css']
})
export class TempformsimpleComponent implements OnInit {

courses : string [] = [
  'HTML','CSS','JS','Angular'
]

genders= [
  {id:'1' , value: 'Male'},
  {id:'2' , value: 'Female'}
]
defaultCourseVal = 'CSS';

defaultUser : string= 'Omkar';

defaultGen : string ='Male'

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(form:NgForm){
    // console.log('all details of form is: ',form);
    console.log(form.value);
    
    
  }
}

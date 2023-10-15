import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {
   myreactiveform!:FormGroup;    //myreactiveform!:FormGroup  ;

  constructor(){
    this.createform()
  }
  ngOnInit() {
   
  }
  createform(){
 this.myreactiveform = new  FormGroup({
  'name': new FormControl('',Validators.required),    // new FormGroup 'name' : new FormControl ('',Validatres.required)
  'DOB': new FormControl('',Validators.required)      //                'DOB' : new FormControl('',validators.required)
 })
  }
  onsubmit(){
    console.log(this.myreactiveform.value);
    
  }
}


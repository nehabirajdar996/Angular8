import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newreactiveform',
  templateUrl: './newreactiveform.component.html',
  styleUrls: ['./newreactiveform.component.css']
})
export class NewreactiveformComponent implements OnInit {
  myReactiveforms:FormGroup;
  constructor() { 
    this.creatform();
  }

  ngOnInit() {
   
  }
  creatform(){
    this.myReactiveforms = new FormGroup({
      
        'Full Name': new FormControl('',Validators.required),
        'Your birthday':new FormControl('',Validators.required),
        'Gender':new FormControl('',Validators.required),
        'Country': new FormControl('',Validators.required),
        'Phone': new FormControl('',Validators.required,),
        'Bio': new FormControl('',[Validators.required,Validators.maxLength(5)]),
     'username': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern('^[a-zA-Z0-9]+$')]),
    'email': new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@yahoo.com$")]),
    'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$')]),
    'confirm password': new FormControl('',Validators.required),
    'terms':new FormControl('',[Validators.required,Validators.pattern('^[01]$')])
 
    })
  }
  

}

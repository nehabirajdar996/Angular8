import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-reactiveform',
  templateUrl: './assignment-reactiveform.component.html',
  styleUrls: ['./assignment-reactiveform.component.css']
})
export class AssignmentReactiveformComponent implements OnInit {
myReactiveforms:FormGroup;
  constructor() {
    this.creatform();
   }
  
  ngOnInit() {
  }
creatform(){
  this.myReactiveforms = new FormGroup({
    'userDetails': new FormGroup({
      'Full Name': new FormControl('',Validators.required),
      'Your birthday':new FormControl('',Validators.required),
      'Gender':new FormControl('',Validators.required),
      'Country': new FormControl('',Validators.required),
      'Phone': new FormControl('',Validators.required,),
      'Bio': new FormControl('',Validators.maxLength(5))
}),
'accountDetails': new FormGroup({
  'username': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern('^[a-zA-Z0-9]+$')]),
  'email': new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@yahoo.com$")]),
  'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$')]),
  'confirm password': new FormControl('',Validators.required),
  'terms':new FormControl('',[Validators.required,Validators.pattern('^[01]$')])
}),
  })
}

// tel(control: FormControl): { countryAllowed: boolean; } {
//   if (this.AllowedCountry.indexOf(control.value)  !== -1) {
//     return { 'countryAllowed': true}
//   }
//   return 'null';
// }
}

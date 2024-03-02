import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent {
  empForm:FormGroup;

  education:string []=[
    'Matric',
  'Intermediate',
  'Diploma',
  'Graduate',
  'Post Graduate'
  ];

  constructor(private fb:FormBuilder){
    this.empForm = this.fb.group({
      firstName:'',
      lastName: '',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      expirence:'',
      package:'',
    })
  }

  onFormSumbit(){
    
      console.log(this.empForm.value)
    
  }

}

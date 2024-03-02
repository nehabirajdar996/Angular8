import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
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
    if(this.empForm.valid){
      console.log(this.empForm.value)
    }
  }
}

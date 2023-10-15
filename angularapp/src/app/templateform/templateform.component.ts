import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  isSubmitted = false;
  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]
  user: User;
  myForm: any;
  // @ViewChild('myForm', {static: true}) myForm: NgForm;
  
  constructor() { }
  ngOnInit() {
  }

  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  defaultusername = 'Neha'
  defaultGenderValue= 'Male';
  OnSubmit(form: NgForm) {
    this.isSubmitted = true;
    
    this.user = new User();
    this.user.userName = form.value.username;
    this.user.email = form.value.email;
    this.user.course = form.value.course;
    this.user.gender = form.value.gender;
    console.log('After bind value to User Object', this.user);
//how to reset form
    form.reset();
    form.controls["course"].setValue("Angular");
    form.controls["gender"].setValue("Male");
   
  }
}


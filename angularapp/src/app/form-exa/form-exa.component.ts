import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-exa',
  templateUrl: './form-exa.component.html',
  styleUrls: ['./form-exa.component.css']
})
export class FormEXAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form: NgForm){
    console.log('value from signup form',form.value);
    
  }
}

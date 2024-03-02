import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-daily-practice';

  reactiveForm = new FormGroup({
    'firstName' : new FormControl(''),
    'lastName': new FormControl(''),
    'email': new FormControl(''),
    'mobile': new FormControl(''),
    'gender': new FormControl(''),
    'password': new FormControl(''),
    'Repeate':new FormControl('')

  })

  onsumbit(){
   console.log(this.reactiveForm.value) ;
  }
}

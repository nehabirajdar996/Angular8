import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 myReactiveform !:FormGroup;

  constructor() { 
    this.creatform();
  }

  creatform(){
    this.myReactiveform= new FormGroup ({
     'email': new FormControl('',[Validators.required,Validators.email]),
      'pass': new FormControl('',[Validators.required]),
      'confirm':new FormControl('',[Validators.required])
    })

  }
  ngOnInit() {
  }
onsubmit(){
  console.log(this.myReactiveform)
}
}

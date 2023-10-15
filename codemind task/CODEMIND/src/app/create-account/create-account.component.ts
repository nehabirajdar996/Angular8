import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  createAccount!: FormGroup;
  imgaearray:any
  // url='https://login-details-67cef-default-rtdb.firebaseio.com/';
  
  constructor(private fb: FormBuilder,private http:HttpClient,private authservice:AuthenticationService,private servivedata:ServiceService) {
    

  }

  ngOnInit(): void {
    this.createAccount = this.fb.group({
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
    this.getimage()
  }

  getimage(){
    this.servivedata.getdata().subscribe(res=>{
      this.imgaearray = res;
console.log('my data',this.imgaearray)
    })
  }

  postdata(email:any,username:any)
  {
    this.authservice.post(email,username).subscribe(res =>{
      console.log('post data',res)
    })
  

//   onSubmit() {
//     if (this.createAccount.valid) {
//       // Handle form submission, e.g., authentication
//       console.log('Form submitted:', this.createAccount.value);

// }
  }
  }

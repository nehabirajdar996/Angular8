import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  
  constructor(private fb: FormBuilder,
    private http:HttpClient,
    private authservice:AuthenticationService,
    private servivedata:ServiceService) 
    {
      
     }

     
  ngOnInit(): void {
    this.createAccount = this.fb.group({
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }

 postdata(email:any,username:any,password:any)
  {
    this.authservice.post(email,username,password).subscribe(res =>{
      console.log('post data',res)
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  createAccount!: FormGroup;
  // url='https://login-details-67cef-default-rtdb.firebaseio.com/';
  
  constructor(private fb: FormBuilder,private http:HttpClient,private authservice:AuthenticationService) {

  // this.authservice.post().subscribe((res:any)=> {
  //   console.log('res from firebase', res);
  //  })
  }
  // createPost() : Observable<any> {
  //   let user=this.createAccount.get('email')?.value
  //   let pass=this.createAccount.get('username')?.value
  //   let postData = {
  //     username: user,
  //     password: pass
  //   }
  //  return this.http.post(this.url + 'posts.json', postData);

  // }

  ngOnInit(): void {
    this.createAccount = this.fb.group({
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
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

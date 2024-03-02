import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url='https://login-details-67cef-default-rtdb.firebaseio.com/';
  
  constructor(private http:HttpClient) { }

  get(){
   return this.http.get(this.url)
  }
  
  post(email:any,username:any,password:any){
    let postdata ={
      email: email,
      username:username,
      password: password,
     }
    return this.http.post(this.url + 'posts.json',postdata)
  }

  

}

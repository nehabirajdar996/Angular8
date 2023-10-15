import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
firebaseUrl ='https://curdb6-default-rtdb.firebaseio.com/'
  constructor(private httpclient:HttpClient) { }

  // createPost(): Observable<any>{
  //  let  postData ={
  //   title:'this is angular 8 curd with firebase',
  //   content:'this is test firebase '
  //  }
  // return this.httpclient.post(this.firebaseUrl + 'posts.json',postData);
  // }

  getPostData(): Observable<any>{
    return this.httpclient.get(this.firebaseUrl + 'posts.json')
  }
}

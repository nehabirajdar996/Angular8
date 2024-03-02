import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private mydata:HttpClient) { }

  getdata():Observable<any>
  {
  return this.mydata.get('https://jsonplaceholder.org/users')
  }

  postData(data: any): Observable<any> {
    const url = 'https://.typicode.com/posts';
    return this.mydata.post(url, data);
  }
  
}

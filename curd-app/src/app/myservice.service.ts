import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http:HttpClient) { }

    // getdata():Observable<any>{
    //      return this._http.get(`http://localhost:3000/employee`)
    // }
    getdata():Observable<any>{
      return this._http.get('https://jsonplaceholder.typicode.com/users')
    }

    postdata(data:any):Observable<any>{
      return this._http.post('https://jsonplaceholder.typicode.com/posts',data)
    }
  
}

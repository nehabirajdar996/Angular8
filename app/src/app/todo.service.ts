import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl:string=' http://localhost:3000/todos';
  headers = new HttpHeaders().set('Content-Type','application/json')
  constructor(private httpClient:HttpClient) { }

//create -post

create(data:any):Observable<any>{
  let API_URL = 'http://localhost:3000/todos';
  return this.httpClient.post(API_URL,data)
}

list(){
  return this.httpClient.get('http://localhost:3000/todos');
}

update(id:any,data:any):Observable<any>{
  let API_URL = 'http://localhost:3000/todos,id,data';
  return this.httpClient.put(API_URL,data,{headers:this.headers});
}

delete(id:any):Observable<any>{
  let API_URL='http://localhost:3000/todos,id';
  return this.httpClient.delete(API_URL)
}
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 URL="http://localhost:3000/data";

 constructor(private http:HttpClient) { }


   postdata(body:any){
    return this.http.post(`${this.URL}`,body)
   }
   
   getdata(){
    return this.http.get(this.URL)
  }
}

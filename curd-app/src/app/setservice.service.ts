import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetserviceService {
  
  constructor(private http:HttpClient) { }
  

postdata(data:any):Observable<any>{
   return this.http.post('',data)
  
}

delete(id:number):Observable<any>{
  return  this.http.delete('id')
}

getdata():Observable<any>
{
  return this.http.get('')
}
  

}

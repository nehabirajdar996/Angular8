import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
api = "https://randomuser.me/api/?results=50"
  constructor(private httpClient:HttpClient) { 

  }

 getapi(): Observable<any>{
  return this.httpClient.get(this.api);
      }
}

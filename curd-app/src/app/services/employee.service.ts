import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

    addEmpolyee(data:any): Observable<any>{
      return this._http.post('http://localhost:3000/empolyee',data);
    }

    getEmpolyeeList(): Observable<any>{
      return this._http.get('http://localhost:3000/empolyee');

    } 

    deleteEmployee(id:number):Observable<any>{
       return this._http.delete(`http://localhost:3000/empolyee/${id}`)
    }
  }


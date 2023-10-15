import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
stateurl ="http://awsmaster.mahamining.com/master/states/GetState";
divisionurl ="http://awsmaster.mahamining.com/master/divisions/id";
districturl ="http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=id"
talukaurl="http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/id";
villageurl=""
  constructor(private  httpClient:HttpClient) { }
  Getallstate(): Observable <any> {
   return this.httpClient.get(this.stateurl);
  }

  Getalldivision(id:any):Observable<any> {
    return this.httpClient.get(this.divisionurl+id)
  }

  Getalldistrict(id:any):Observable<any> {
    return this.httpClient.get(this.districturl+id)
  }
  Getalltalika():Observable<any>{
    return this.httpClient.get(this.talukaurl);
  }
  Getallvillage():Observable<any>{
    return this.httpClient.get(this.villageurl);
  
  }
}

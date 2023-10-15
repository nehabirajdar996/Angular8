import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpaceService {
spaceUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="space"&origin=*'
  constructor(private httpClient:HttpClient) { }
  
  GetspaceData(searchQuery) : Observable<any> {
    let params = new HttpParams();
    params = params.append('action', 'query');
    params = params.append('format', 'json');
    params = params.append('list', 'search');
    params = params.append('utf8', '1');
    params = params.append('srsearch', searchQuery);
    params = params.append('origin', '*');
    
return this.httpClient.get(this.spaceUrl,{params:params});
}
}
  



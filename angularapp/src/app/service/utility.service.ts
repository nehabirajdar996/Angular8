import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // decalre subject obserable.
  userDataSubject = new Subject<any>();
 
// userDataSubject = new BehaviorSubject<any>({});
// userName = new BehaviorSubject('Angular Ui Developer');
constructor() { }
}

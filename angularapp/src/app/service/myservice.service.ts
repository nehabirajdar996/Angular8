import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  showAge: any;
 

  constructor() { }
  PrintFile(){
    alert('file printed suceesfully');
  }
  ageCalculator(age: any) {
    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return this.showAge = Math.floor(timeDiff/(1000*3600*24)/ 365);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';
import { element } from 'protractor';

@Component({
  selector: 'app-copm1',
  templateUrl: './copm1.component.html',
  styleUrls: ['./copm1.component.css']
})
export class Copm1Component implements OnInit {
fullname;
firstame;
lastname;
  // inject service
  constructor(private utilityService: UtilityService) { 
    this.utilityService.userDataSubject.subscribe(res => {
      console.log('res from comp1 fullname',res);
      this.fullname = res;
     })
  }

  ngOnInit() {
  }

  displayNames(fname){
    console.log(fname.value.split(' '));
    const names = fname.value.split(' ');
   const objOfNames = {
    firstname: names[0],
    lastname: names[names.length-1]
   }
this.utilityService.userDataSubject.next(objOfNames);
  }
}
  // lastName(last){
  //   console.log(last.value);
  //   this.lastNames = last.value;
  //   this.utilityService.LastName.next(last.value);
    
  // }




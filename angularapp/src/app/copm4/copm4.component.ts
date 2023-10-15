import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-copm4',
  templateUrl: './copm4.component.html',
  styleUrls: ['./copm4.component.css']
})
export class Copm4Component implements OnInit {

  fullname;
  firstname;
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
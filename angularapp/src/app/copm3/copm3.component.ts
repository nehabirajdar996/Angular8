import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-copm3',
  templateUrl: './copm3.component.html',
  styleUrls: ['./copm3.component.css']
})
export class Copm3Component implements OnInit {

  fullname;
  firstname;
  lastname;
    // inject service
    constructor(private utilityService: UtilityService) { 
      this.utilityService.userDataSubject.subscribe(res => {
        console.log('res from comp3 fullname',res);
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
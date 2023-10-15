import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
  providers:[MyserviceService]
})
export class Service1Component implements OnInit {
  showAge: number;

  constructor(private objMyserviceService : MyserviceService) { }

  ngOnInit() {
  }
  
  print(){
  this.objMyserviceService.PrintFile();
  }

  ageCalculator(age: any) {
    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return this.showAge = Math.floor(timeDiff/(1000*3600*24)/ 365);
    }
  }

}

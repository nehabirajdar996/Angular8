import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css'],
  providers:[MyserviceService]
})
export class Service2Component implements OnInit {

  constructor(private objMyserviceService:MyserviceService ) { }

  ngOnInit() {
  }
print(){
 
  this.objMyserviceService.PrintFile();
}
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  usern:string;

  constructor(private userServuce : ApiService) {
    this.userServuce.username.subscribe(res => {
   console.log("comp2 data is:",res);
   this.usern = res;
    })
  }

  ngOnInit() {
  }
  updatedname(uname){
    this.usern = uname.value
    this.userServuce.username.next(uname.value)
  }

}


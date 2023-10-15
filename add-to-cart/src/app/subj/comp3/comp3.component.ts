import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  usern:string;

  constructor(private userServuce : ApiService) {
    this.userServuce.username.subscribe(res => {
   console.log("comp3 data is:",res);
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
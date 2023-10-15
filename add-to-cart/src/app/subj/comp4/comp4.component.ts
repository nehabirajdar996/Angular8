import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  usern:string;

  constructor(private userServuce : ApiService) {
    this.userServuce.username.subscribe(res => {
   console.log("comp4 data is:",res);
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

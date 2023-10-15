import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 usern:string;
  constructor(private userServuce : ApiService) {
    this.userServuce.username.subscribe(res => {
   console.log("comp1 data is:",res);
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

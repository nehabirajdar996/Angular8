import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

name : string = "neha koli";
age:number=27;
place="solapur";
adduser= false;
array:any =[]

constructor(private mydata : MyserviceService) {
  //  setTimeout(()=>{
  //   this.adduser= true;
  //  },3000)

  

  }

  ngOnInit(): void {
    
      this.mydata.getdata().subscribe(data =>{
        this.array = data
        
         })
         console.log(this.array)
      }
    
    
  
    }
 






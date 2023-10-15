import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../service/get-api.service';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetAPIComponent implements OnInit {
array:any[]=[];
  constructor(private apiservice:GetAPIService) { }

  ngOnInit() {
    
    this.apiservice.getapi().subscribe(res =>{
         console.log(`api data`,res.results);
        this.array=res.results;
    }
    )} 
       
     }
  

  
  



import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../service/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
  arraylist=[];
  //Inject the rapid api service
  constructor(private rapidApiService: RapidapiService){ }

  ngOnInit() {
    this.rapidApiService. getDataYahooFinance().subscribe( res => {
      console.log('getting data from rapid API ', res.value);
    })
    // this.rapidApiService.getDatacricbuzzCricket().subscribe(res =>{
    //   console.log('get data',res.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches);
      
    // })
    this.getdaat();
    
    
  }
  getdaat(){
    return this.rapidApiService.getDatacricbuzzCricket().subscribe((res) =>
      this.arraylist= res.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches)
    }

}


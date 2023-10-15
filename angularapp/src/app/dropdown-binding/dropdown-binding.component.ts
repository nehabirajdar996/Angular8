import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-dropdown-binding',
  templateUrl: './dropdown-binding.component.html',
  styleUrls: ['./dropdown-binding.component.css']
})
export class DropdownBindingComponent implements OnInit {
// testMode:TestModel[];
isloaded=false;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.Getallstate().subscribe(res => {
        console.log('get all ststes',res);
      
  })
    this.stateService.Getalldivision(9).subscribe(res =>{
      console.log('get all division',res);
      
    
    })
    this.stateService.Getalldistrict(8).subscribe(res =>{
      console.log('get all division',res);
    }) 
    this.stateService.Getalltalika().subscribe(res =>{
      console.log('get all taluka',res)
      
    })
    this.stateService.Getallvillage().subscribe(res =>{
      console.log('get all villages',res);
      
    })
  }

}

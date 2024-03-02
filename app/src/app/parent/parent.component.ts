import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  dataToShow:any

  constructor(private data:MyserviceService){}

  ngOnInit(): void {
    this.displaydata()
    this.postData
    
  }

  displaydata()
  {
    this.data.getdata().subscribe(res => {
         console.log(res)
         this.dataToShow = res;
    })

}



postData() {
  const data = { title: 'foo', body: 'bar', userId: 1 };
  this.data.postData(data).subscribe(response => {
    console.log('Response:', response);
  }, error => {
    console.error('Error:', error);
  });
}
}

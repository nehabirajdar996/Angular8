import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  myString = 'hello, world!';
  birthdate ='6 august 1996';
  currency='123';
  c=12
 
  namesearch: string = '';
  
  productArr : any [] = [
    {
      sno: 1, 
      name: 'Mobile',
      price: '17000 Rs',
      availability : 'Available'
    },
    {
      sno: 2, 
      name: 'TV',
      price: '37000 Rs',
      availability : 'Available'
    },
    {
      sno: 3, 
      name: 'Washing Machine',
      price: '207000 Rs',
      availability : 'Available'
    },
    {
      sno: 4, 
      name: 'Samsung Tab',
      price: '117000 Rs',
      availability : 'Available'
    }
  ]

  AddProduct(product) {
    this.productArr.push({
      sno: 5, 
      name: product.value,
      price: '117000 Rs',
      availability : 'Not Available'
    })

}
constructor() { }

  ngOnInit() {
  }
}

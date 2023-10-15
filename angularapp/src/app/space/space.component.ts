import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../service/space.service';
import { Space } from '../model/spaces';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  arraspace: Space[]=[];
  getdata: any[];

  constructor(private spacedata: SpaceService ) { }

  ngOnInit() {}

  serach(val) {
    this.spacedata.GetspaceData(val).subscribe(res =>{
      console.log(`space data`,res.query.search);
      this.arraspace = res.query.search;
    })
  }
}
   



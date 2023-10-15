import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase-assignment',
  templateUrl: './switchcase-assignment.component.html',
  styleUrls: ['./switchcase-assignment.component.css']
})
export class SwitchcaseAssignmentComponent implements OnInit {
  selectedValue: string;
  
  getSelectedValue(value): void {
    console.log(value.target.value);
    this.selectedValue = value.target.value;
  }


  constructor() { }

  ngOnInit() {
  }

}

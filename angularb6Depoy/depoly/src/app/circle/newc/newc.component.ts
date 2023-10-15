import { Component } from '@angular/core';

@Component({
  selector: 'app-newc',
  templateUrl: './newc.component.html',
  styleUrls: ['./newc.component.css']
})
export class NewcComponent {
  circles: any[] = [];

  addCircle() {
    // Generate a unique circle identifier, e.g., a timestamp
    const circleId = new Date().getTime();

    // Push the circle identifier to the circles array
    this.circles.push(circleId);
}
}

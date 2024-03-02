import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MycompComponent } from './mycomp/mycomp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mycurd';

  constructor(private dialog:MatDialog){};

  addnewemp()
  {
    this.dialog.open(MycompComponent)
  }
}

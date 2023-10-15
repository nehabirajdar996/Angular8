import { Component } from '@angular/core';
import { MyserviceService } from './service/myservice.service';
import { UserService } from './service/user.service';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDestory: boolean = true;
  title = 'angularapp 8';
  name = 'Neha '
  Degree = "BE"
 lastName = 'koli';
 data : string = 'red';

imgURL = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  showAge: any;
  age: any;
  nam:boolean= true;
  getName() {
    return this.lastName
  }

  OnDestroy() {
    this.isDestory = false;
  }
  
  changecolor() {
    this.data = 'blue';
  }

  // injecct the service
  constructor(private firebaseservice:FirebaseService,private myService: MyserviceService,private userService: UserService) {
    // this.firebaseservice.createPost().subscribe(res => {
    //   console.log('res from firebase ',res);
      
    // })
  }

  changeImage(e) 
  {
    this.imgURL = e.target.value;
    console.log('catch $event', e);
  }

  show(){
    alert('button event raised')

  }

  ageCalculator(): any {
    this.showAge = this.myService.ageCalculator(this.age)
   }
   
   getUserData() {
    this.userService.GetUsers().subscribe(res => {
     console.log('user data', res);
    });
   
    
  }
}
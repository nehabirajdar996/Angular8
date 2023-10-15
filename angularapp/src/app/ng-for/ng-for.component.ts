import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  [x: string]: any;
  title: string = 'Top 3 Bollywood Movies';

  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar Hirani', cast:'Amir Khan', releaseDate:'2009' },
    { title: 'Lagaan', director: 'Ashutosh ', cast: 'Amir Khan', releaseDate: '2000'},
    { title: 'Tanhaji: The Unsang Warrior', director:'Om Raut', cast: 'Ajay', releaseDate: '2020'}
  ]

// inject the service
  constructor(private UserService : UserService) { }

  ngOnInit() {
  //   this.UserService.GetUsers().subscribe((res => {
  //     console.log('user res', res) 
  //   }), (error: any) => {
  //     console.log('error occured', error)
  //   }),
  //   () => console.log('completed')
  // }

  // // this.UserService.GetUsers().subscribe(res => {
  // //   console.log('getting data from NgFor comp', res)
  // })

  // Observable
  const obs = new Observable((observer) => {
    console.log('My observable start');
    observer.next('1') // Data stream 
    observer.next('2')
    observer.error('error occured')
    observer.next('4')
    observer.next('5')
 
  })

  // obs.subscribe(
  //   val => { console.log(val)}, // next
  //   error => { console.log('error')},// error
  //   () => { console.log('Completed')}
  // )
  // }

  obs.subscribe(val => {
    console.log(val)
  })

  

}
}
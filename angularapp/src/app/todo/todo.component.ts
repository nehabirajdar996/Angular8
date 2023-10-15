import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy{
subcription:Subscription;
  constructor(private todo: TodoService) { }

  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }

  ngOnInit() {
  }

    createTodo() {
      let todo = {
        id : new Date().getTime(),
        title: `Pawan mustika`
      }
  
     this.subcription = this.todo.create(todo).subscribe(res => {
        console.log('todo create', res);
      })
    }
  }






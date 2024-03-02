import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todoList:any =[];
constructor(private todoServices:TodoService){}

ngOnInit(){
  this.getTodos();
}
createTodo(){
  let todo={
    id:new Date().getTime(),
    title: 'practice decorator'
  }

  this.todoServices.create(todo).subscribe(res =>{
    console.log('todo create',res);
    this.getTodos();
  })
}

getTodos(){
  this.todoServices.list().subscribe((res)=>{
    this.todoList = res;
    console.log('get todos list',this.todoList);
  })

  

}


editTodo(todo:any){
 let data ={
  id:new Date().getTime(),
  title:'edited doto'
 }
 this.todoServices.update(todo.id,data).subscribe((res)=>{
  this.getTodos();
 },err=>{
  console.log('error occured');
 })

}

deleteTodo(id:any){
  this.todoServices.delete(id).subscribe((res)=>{
    this.getTodos();
  },(error => {
    console.log('error occured',error);
  }))
}

}
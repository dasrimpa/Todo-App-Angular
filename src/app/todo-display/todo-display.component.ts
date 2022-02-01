import { Todo } from './../interface/Todo';
import { TodoService } from './../services/todo.service';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-display.component.html',
  styleUrls: ["./todo-display.component.css"]
})
export class TodoDisplay implements OnInit {
   todoList: Todo[] =[];
 
   constructor(public apiService:ApiService,
    public todoService:TodoService) {
     }
 
   ngOnInit(): void {
      this.todoList=this.todoService.todoList;
    this.apiService.getTodoList().subscribe(todos => {
      this.todoList = todos;
      console.log(todos);
    });
   
   }

  removeTodo(objectId:string) {
    this.apiService.deleteTodo(objectId).subscribe(() => {
      this.todoList = this.todoList.filter((t: Todo) => t.objectId !== objectId);
    });
  }
     
  }



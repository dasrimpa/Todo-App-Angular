import { TodoService } from './../services/todo.service';
import { ApiService } from './../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../interface/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-display.component.html',
  styleUrls: ["./todo-display.component.css"]
})
export class TodoDisplay implements OnInit {

   @Input() todoInput: Todo | undefined;
   result: Todo[] =[];
   todoList: Todo[] =[];

   toasterService: any;
 
   constructor(public apiService:ApiService,
    public todoService:TodoService) { }
 
   ngOnInit(): void {
     this.todoList=this.todoService.todoList;
  
   }
   deleteTodo(id: string): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    console.log(this.todoList);
  }
   
   }


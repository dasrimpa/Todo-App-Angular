import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interface/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-display.component.html',
  styleUrls: ["./todo-display.component.css"]
})
export class TodoDisplay implements OnInit {

   @Input() todoInput: Todo | undefined;
   todoList: Todo[] =[];
   toasterService: any;
 
   constructor(public todoService: TodoService) { }
 
   ngOnInit(): void {
     this.todoList=this.todoService.todoList;
   }
 
  deleteTodo(id:string){  
    this.todoList = this.todoList.filter(t => t.id !==id);
  }  
   
   }


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
   todo: Todo | undefined;
   toasterService: any;
 
   constructor(public todoService: TodoService) { }
 
   ngOnInit(): void {
     
   }
 
   deleteTodo(item: Todo) {
     this.todo = item;
     this.todoService.deleteTodo(item);
     this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfully');
   }
   
   }


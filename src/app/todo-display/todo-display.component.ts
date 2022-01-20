import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interface/Todo';
import { FormGroup } from '@angular/forms';

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
 
  deleteTodo(id:number){  
    this.todoList = this.todoList.filter((value , i) => i !==id);
  }  
  editTodo(i: number){
    let title = this.todoList[i].title;
    let result = prompt("Edit Todo", title);
    if (result !== null){
      this.todoList[i].title = result;
    }
  }
   
   }


import { Todo } from './../interface/Todo';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoList: Todo[] = [
  ];
  title :any;

  addTodo(todo: Todo) {
   
    todo = {
      ...todo,
      id: uuidv4(),
  }
    this.todoList.push(todo);
  }
  updateTodo(todo: Todo){
    const index= this.todoList.findIndex( t => t.id === todo.id );
    if(index !== -1){
      this.todoList[index]= todo;
    }
    else{
      console.log("error");
    }
   
  }
  getCurrentData(id: string) {
  const getitem = this.todoList.find( item => item.id === id );
  return getitem;

  }
  
}

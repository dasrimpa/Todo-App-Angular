import { Injectable } from '@angular/core';
import { Todo } from '../interface/Todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  [x: string]: any;

  todoList: Todo[] = [
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: false,
    },
  ];

  addTodo(title:string) {
    let id = this.todoList.length + 2;
    const item: Todo = {
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
       title:title
    }
    this.todoList.push(item);
  }
  updateTodo(i: number){
    let title = this.todoList[i].title;
    let result = title;
    if (result !== null){
      this.todoList[i].title = result;
    }
    this['profileForm'].patchValue({
      id: this['title'][i].id,
    });
  }
  getCurrentData(id:number) {
     this.todoList[id];
  }
  
}

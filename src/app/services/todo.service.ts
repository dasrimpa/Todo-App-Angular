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

  deleteTodo(item: Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  addTodo(title: string) {
    let id = this.todoList.length + 2;
    const item: Todo = {
      id: id,
      isCompleted: false,
      title: title
    }
    this.todoList.unshift(item);
  }
}

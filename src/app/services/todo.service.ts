import { Todo } from './../interface/Todo';
import { Injectable } from '@angular/core';
import { Todo } from '../interface/Todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

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
  title: any;

  addTodo(title:string) {
    let id = this.todoList;
    const item: Todo = {
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
       title:title
    }
    this.todoList.push(item);
  }
  updateTodo(id: number){
    let title = this.todoList[id].title;
    let result = title;
    if (result !== null){
      this.todoList[id].title = result;
    }
  }
  getCurrentData(id:number) {
  //   // return this.todoList.find();
  const getitem = this.todoList.find( item => item.id === id );
  return getitem;

  }
  
}

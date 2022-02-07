import { Todo } from './../interface/Todo';
import { TodoService } from './../services/todo.service';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css'],
})
export class TodoDisplay implements OnInit {
  todoList: Todo[] = [];
  pager: any = {};
  pagedItems: any[] | undefined;

  constructor(
    private apiService: ApiService,
    private todoService: TodoService,
    private pagerService: PagerService
  ) {}

  ngOnInit(): void {
    this.todoList = this.todoService.todoList;
    this.apiService.getTodoList().subscribe((todo) => {
      this.todoList = todo;
      console.log(todo);
      this.setPage(1);
    });
  }

  removeTodo(objectId: string) {
    this.apiService.deleteTodo(objectId).subscribe(() => {
      this.todoList = this.todoList.filter(
        (t: Todo) => t.objectId !== objectId
      );
    });
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.todoList.length, page);
    this.pagedItems = this.todoList.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}

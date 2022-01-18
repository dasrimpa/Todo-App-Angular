import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
@Component({
    selector: 'app-profile-editor',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
  })

export class TodoCreate {
       profileForm: any;
       todo = '';
       
       constructor(public todoService: TodoService) { }
       ngOnInit(): void {
        this.profileForm = new FormGroup({
          name: new FormControl(this.profileForm.name, [
            Validators.required
          ]),
        });
      }
      onSubmit(){
        this.todoService.addTodo(this.todo);
        this.todo = '';
      }
      
      get name() { return this.profileForm.get('name'); }

     
}

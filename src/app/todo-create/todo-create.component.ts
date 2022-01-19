import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
@Component({
    selector: 'app-profile-editor',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
  })

export class TodoCreate {
       profileForm: FormGroup;
       isSubmitted: boolean;
       
       constructor(
         private fb :FormBuilder,
         public todoService :TodoService
       ) { 
         this.isSubmitted=false;
         this.profileForm=this.fb.group({
           title : ['',[Validators.required]],
         });
       }
      
      onSubmit(value: string){
        console.log(value,this.profileForm);
        this.isSubmitted = true;
        if(!this.profileForm.invalid){
          this.todoService.addTodo(value);
         this.isSubmitted =false;
        }
        
      }
       }

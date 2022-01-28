import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../interface/Todo';
import { TodoService } from '../services/todo.service';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
  })

export class TodoCreate implements OnInit {

       profileForm: FormGroup;
       isSubmitted: boolean;
       id: string|  undefined;
       
       constructor(
         private fb :FormBuilder,
         public todoService :TodoService,
         private router: Router,
         private route:ActivatedRoute,
         public apiService:ApiService
       ) { 
         this.isSubmitted=false;
         this.profileForm=this.fb.group({
           title : ['',[Validators.required]],
           id :['']
         });
       
      }
       ngOnInit() {
        console.log(this.route.snapshot.params['id']);
        this.id=  this.route.snapshot.params['id'];
      if(this.id){
       const todo= this.todoService.getCurrentData(this.id);
       if(todo){
       console.log(todo);
       this.profileForm.patchValue(todo);
       }
      }
      }
      
      onSubmit(value: Todo) {
        console.log(value,this.profileForm);
        this.isSubmitted = true;
        if(!this.profileForm.invalid && !this.id){
          this.todoService.addTodo(value);
          this.apiService.addTodo(value);
         this.isSubmitted =false;
         this.router.navigate(['../displaytodo']);
        }
        else if(!this.profileForm.invalid && this.id){
        this.todoService.updateTodo(value);
        this.router.navigate(['../displaytodo']);
        }  
}
        
      }


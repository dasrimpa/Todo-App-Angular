import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../interface/Todo';
import { TodoService } from '../services/todo.service';
@Component({
    selector: 'app-profile-editor',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
  })

export class TodoCreate implements OnInit {
       profileForm: FormGroup;
       isSubmitted: boolean;
       id: number|  undefined;
       
       constructor(
         private fb :FormBuilder,
         public todoService :TodoService,
         private router: Router,
         private route:ActivatedRoute
       ) { 
         this.isSubmitted=false;
         this.profileForm=this.fb.group({
           title : ['',[Validators.required]],
         });
       }

       ngOnInit() {
        console.log(this.route.snapshot.params['id']);
      let id=this.route.snapshot.params['id'];
       let todo= this.todoService.getCurrentData(id);
       console.log(todo);
       this.profileForm.patchValue(todo);
      }
      
      onSubmit(value: Todo){
        console.log(value,this.profileForm);
        this.isSubmitted = true;
        if(!this.profileForm.invalid && !this.id){
          this.todoService.addTodo(this.profileForm.value.title);
          localStorage.setItem('myData', this.profileForm.value.title);
         this.isSubmitted =false;
         this.router.navigate(['../displaytodo']);
        }
        else if(!this.profileForm.invalid && this.id){
        this.todoService.updateTodo(this.profileForm.value.title)
        }
      }
  
      }

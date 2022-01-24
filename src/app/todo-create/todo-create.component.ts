import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../interface/Todo';
import { TodoService } from '../services/todo.service';
@Component({
    selector: 'app-profile-editor',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
  })

export class TodoCreate {
       profileForm: FormGroup;
       isSubmitted: boolean;
       i: any;
       id: string | null | undefined;
       
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
      
      onSubmit(value: Todo){
        console.log(value,this.profileForm);
        this.isSubmitted = true;
        if(!this.profileForm.invalid){
          this.todoService.addTodo(this.profileForm.value.title);
          localStorage.setItem('myData', this.profileForm.value.title);
         this.isSubmitted =false;
         this.router.navigate(['../displaytodo']);
        }
      }
      ngOnInit() {
        console.log(this.route.snapshot.params['id']);
       let result= this.todoService.getCurrentData(this.route.snapshot.params['id']);
       console.log(result);
       
      }

      setControlValue(control: string, value: string) {
        this.profileForm.patchValue({
          [control]: value
        });
      }
      }
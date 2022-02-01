import { Todo } from './../interface/Todo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
       objectId:string |undefined;
       
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
          //  id :['']
         });
       
      }
       ngOnInit() {
        console.log(this.route.snapshot.params['objectId']);
        this.objectId=  this.route.snapshot.params['objectId'];
      if(this.objectId){
       this.apiService.getTodo(this.objectId).subscribe(data=>{ if(data){
        console.log(data);
        this.profileForm.patchValue(data);
        }
        else{
          alert("error");
        }})
      
      }
      }
     
      onSubmit(title: string) {
    
        console.log(title,this.profileForm);
        this.isSubmitted = true;
        if(!this.profileForm.invalid && !this.objectId){
          // this.todoService.addTodo(value);
          this.apiService.addTodo(title);
         this.isSubmitted =false;
         this.router.navigate(['../displaytodo']);
        }
        else if(!this.profileForm.invalid && this.objectId){
        // this.todoService.updateTodo(value);
        this.apiService.updateTodo(title);
        this.router.navigate(['../displaytodo']);
        }  
}
        
      }


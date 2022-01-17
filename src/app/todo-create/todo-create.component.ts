import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-profile-editor',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
  })


export class TodoCreate {
       public items = [];
       public newTask: any | undefined;
  profileForm: any;
       public addToList() {
           if (this.newTask == '') {
             alert("input field required")
           }
           else {
              //  this.items.push(this.newTask);
               this.newTask = '';
           }
       }
       ngOnInit(): void {
        this.profileForm = new FormGroup({
          name: new FormControl(this.profileForm.name, [
            Validators.required
          ]),
        });
      
      }
      
      get name() { return this.profileForm.get('name'); }

     
}

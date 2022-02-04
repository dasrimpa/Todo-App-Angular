import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { ApiService } from '../services/api.service';
import { Todo } from '../interface/Todo';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreate implements OnInit {
  profileForm: FormGroup;
  isSubmitted: boolean;
  id: string | undefined;
  objectId: string | undefined;
  isSuccessful = false;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.isSubmitted = false;
    this.profileForm = this.fb.group({
      title: ['', [Validators.required]],
      objectId: [''],
    });
  }
  ngOnInit() {
    console.log(this.route.snapshot.params['objectId']);
    this.objectId = this.route.snapshot.params['objectId'];

    if (this.objectId) {
      this.apiService.getTodo(this.objectId).subscribe((data) => {
        if (data) {
          console.log(data);
          this.profileForm.patchValue(data);
        } else {
          alert('error');
        }
      });
    }
  }

  onSubmit(formValue: Todo) {
    console.log(formValue, this.profileForm);
    this.isSubmitted = true;
    if (!this.profileForm.invalid && !this.objectId) {
      // this.todoService.addTodo(value);
      this.apiService
        .addTodo(formValue)
        .subscribe((data) => console.log(JSON.stringify(data)));
      this.isSubmitted = false;
      this.router.navigate(['../display-todo']);
    } else if (!this.profileForm.invalid && this.objectId) {
      // this.todoService.updateTodo(title);
      this.apiService
        .updateTodo(this.profileForm.value)
        .subscribe((data) => console.log(JSON.stringify(data)));
      this.router.navigate(['../display-todo']);
    }
  }
}

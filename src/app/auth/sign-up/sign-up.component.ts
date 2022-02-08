import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.register(username, password).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert('Account Created Successfully');
        this.router.navigate(['../display-todo']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log(err);
        alert('Account already exists for this username.');
      }
    );
  }
}

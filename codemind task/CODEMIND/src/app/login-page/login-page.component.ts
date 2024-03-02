import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const user = this.loginForm.get('username')?.value;
    const pass = this.loginForm.get('password')?.value;
    this.authService.get().subscribe((res: any) => {
      console.log('response', res);
    //   const foundUser = res.find((userObj: any) => userObj.username === user && userObj.password === pass);
    //   if (foundUser) {
    //     this.router.navigate(['imagePostPage']);
    //     this.snackbar.open(' Password is correct', '', { duration: 1000, verticalPosition: 'bottom' });
    //   } else {
    //     this.snackbar.open(' Incorrect password or email', '', { duration: 1000 });
    //   }
     });
  }
}

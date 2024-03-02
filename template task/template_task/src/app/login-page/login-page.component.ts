import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
    loginForm!: FormGroup;
  
    constructor(private fb: FormBuilder ) { }
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        // Handle login logic
        console.log(this.loginForm.value);
      } else {
        // Mark fields as touched to display validation errors
        this.loginForm.markAllAsTouched();
      }
    }
  }


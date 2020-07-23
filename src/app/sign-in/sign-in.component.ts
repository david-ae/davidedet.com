import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../../assets/css/split.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(){
    let username = this.signInForm.get('username').value;
    let password = this.signInForm.get('password').value;

    if(username == "quote_david" && password == "thoughts_qu0t3"){
      this.router.navigate(['/quote-aa']);
    }
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  showAlert=false
  alertMsg= 'Please wait! Your are being logged into the application.'
  alertColor ='green'

  email=  new FormControl('',[
    Validators.required,
    Validators.email,
  ])
  password= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])

  loginForm = new FormGroup({
    email:  this.email,
    password: this.password
  })

  login() {
    console.log(this.loginForm.value)
    this.showAlert = true
    this.alertMsg= 'Please wait! Your are being logged into the application.'
    this.alertColor ='green'
  }

  get formInfo() { return this.loginForm.controls; }
}

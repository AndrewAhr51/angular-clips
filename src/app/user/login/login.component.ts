import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import  IUser from 'src/app/models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

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
    password: this.password,

  })

  ngOnInit(): void {}

  showAlert=false
  alertMsg= 'Please wait! Your are being logged into the application.'
  alertColor ='blue'
  inSubmission = false;

  constructor(
    private auth: AuthService
    ) { }

  async login() {
    try {
      this.inSubmission = true;
      this.showAlert = true
      this.alertMsg= 'Please wait! Your are being logged into the application.'
      this.alertColor ='blue'

      await this.auth.loginUser(this.loginForm.value as IUser)
    }
    catch(e) {
      this.alertMsg = 'An unexpected error occurred. Please try again later'
      this.alertColor ='red'
      this.inSubmission = false;
      console.log(e)
      return
    }

    this.alertMsg = 'Success! Your are now logged in..'
    this.alertColor ='green'

    this.inSubmission = false;
  }

}

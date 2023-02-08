import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  name = new FormControl('',[
    Validators.required,
    Validators.minLength(2)
  ])
  email=  new FormControl('',[
    Validators.required,
    Validators.email,
  ])
  age= new FormControl('',[
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)

  ])
  phoneNumber= new FormControl('',[
    Validators.required,
    Validators.maxLength(13),
    //Validators.pattern(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm)
  ])

  showAlert=false
  alertMsg= 'Please wait! Your account is being created.'
  alertColor ='blue'

  registerForm = new FormGroup({
    name:  this.name,
    email:  this.email,
    age: this.age,
    password: this.password,
    confirm_password:  this.confirm_password,
    phoneNumber:  this.phoneNumber

  })

  register() {
    this.showAlert = true
    this.alertMsg = 'Please wait your account is being created.'
    this.alertColor ='blue'
  }
}

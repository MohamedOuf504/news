import { Router } from '@angular/router';
import { AuthenticatorService } from './../authenticator.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    error:string =''
    registerForm: FormGroup = new FormGroup({

    first_name: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(8) ]),

    last_name: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(8) ]),

    age: new FormControl(null,[Validators.required,Validators.min(16), Validators.max(80) ]),

    email: new FormControl(null,[Validators.required,Validators.email]),

    password: new FormControl(null,[Validators.required ,Validators.pattern(`^[A-z]+[0-9]{6,10}$`)])

  });

  constructor( private _AuthenticatorService:AuthenticatorService , private _Router:Router) { }

  ngOnInit(): void {
  }

  SubmitregisterForm(registerForm: FormGroup) {

    if (registerForm.valid)
    {
      this._AuthenticatorService.register(registerForm.value).subscribe((response) => {

        if (response.message == "success")
        {
          this._Router.navigate(["LOGIN"])
        }
        else {

          this.error = response.errors.email.message;

        }
      })
    }
  }

}

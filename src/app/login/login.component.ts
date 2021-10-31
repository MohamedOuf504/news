import { Router } from '@angular/router';
import { AuthenticatorService } from './../authenticator.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = ''
  loginForm: FormGroup = new FormGroup({

  email: new FormControl(null,[Validators.required,Validators.email]),

  password: new FormControl(null,[Validators.required ,Validators.pattern(`^[A-z]+[0-9]{6,10}$`)])
});
constructor( private _AuthenticatorService:AuthenticatorService , private _Router:Router) { }

  ngOnInit(): void {
  }


  SubmitloginForm(loginForm: FormGroup) {

    if (loginForm.valid)
    {
      this._AuthenticatorService.login(loginForm.value).subscribe((response) => {

        if (response.message == "success")
        {
          localStorage.setItem('userToken', response.token)
          this._AuthenticatorService.saveUserData()
          this._Router.navigate(["home"])
        }
        else {

          this.error = response.message;

        }
      })
    }
  }

}

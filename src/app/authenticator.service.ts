import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {


  userData = new BehaviorSubject (null)

  saveUserData() {

    let encodedUserData = JSON.stringify( localStorage.getItem('userToken'))
    this.userData.next(jwtDecode(encodedUserData))
    console.log(this.userData)
  }


  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null)
    {
      this.saveUserData()
    }
   }

  register(formdata: object): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", formdata)
  }
  login(formdata: object): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", formdata)
  }
  logout() {

    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(["LOGIN"])
  }
}

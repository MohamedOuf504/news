import { AuthenticatorService } from './../authenticator.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false
  userinfo :any = ''

  constructor(private _AuthenticatorService:AuthenticatorService) { }

  ngOnInit(): void {


      this._AuthenticatorService.userData.subscribe(() => {


        if (this._AuthenticatorService.userData.getValue() != null)
        {
          this.userinfo = this._AuthenticatorService.userData
          console.log(this.userinfo)

          this.isLogin = true;
        }
        else {

          this.isLogin = false;

        }

      })

  }
  logout()
  {
    this._AuthenticatorService.logout()

  }


}

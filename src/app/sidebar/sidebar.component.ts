import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { AuthenticatorService } from '../authenticator.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  isLogin:boolean = false
  word: string = ''
  worldNews : any = ''
  constructor( private _ArticlesService :ArticlesService  , private _AuthenticatorService :AuthenticatorService) { }

  ngOnInit(): void {
    this._ArticlesService.getWorldNews().subscribe((response) => {


      this.worldNews= response.results.slice(1,16)


    })

    this._AuthenticatorService.userData.subscribe(() => {


      if (this._AuthenticatorService.userData.getValue() != null)
      {
        this.isLogin = true;
      }
      else {

        this.isLogin = false;

      }

    })
  }

}

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { ArticlesService } from './../articles.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthenticatorService } from '../authenticator.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  allArticles: any[] = [];
  technologyArticles: any = ""
  businessArticles: any = ""
  healthArticles: any = "";

  x: any;

  constructor(private _ArticlesService: ArticlesService, private _AuthenticatorService: AuthenticatorService) { }
  ngOnInit(): void {
    this.x =  this._ArticlesService.getallcontent().subscribe((response) => {
      console.log(typeof (response.results))
      this.allArticles = response.results
    })


    this._ArticlesService.getSpecificAricles("technology").subscribe((response) => {


      this.technologyArticles = response.results.slice(1, 3)

    })


    this._ArticlesService.getSpecificAricles("health").subscribe((response) => {


      this.healthArticles = response.results.slice(1, 3)

    })



    this._ArticlesService.getSpecificAricles("business").subscribe((response) => {


      this.businessArticles = response.results.slice(1, 3)

    })




  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 70,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}





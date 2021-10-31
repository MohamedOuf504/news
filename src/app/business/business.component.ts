import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessArticles: any = ""

  constructor(private  _ArticlesService:ArticlesService) { }

  ngOnInit(): void {
    this._ArticlesService.getSpecificAricles("business").subscribe((response) => {


      this.businessArticles = response.results

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

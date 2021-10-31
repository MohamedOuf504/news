import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologyArticles: any = ""

  constructor(private  _ArticlesService:ArticlesService) { }

  ngOnInit(): void {
    this._ArticlesService.getSpecificAricles("technology").subscribe((response) => {


      this.technologyArticles = response.results

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

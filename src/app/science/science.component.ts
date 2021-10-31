import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceArticles: any = ""

  constructor(private  _ArticlesService:ArticlesService) { }

  ngOnInit(): void {
    this._ArticlesService.getSpecificAricles("science").subscribe((response) => {


      this.scienceArticles = response.results

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

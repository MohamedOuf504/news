import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: any = null
  returnToSearch: any = ''

  constructor(private _ArticlesService: ArticlesService, private _Router: Router, private _ActivatedRoute: ActivatedRoute,) {
  }
  ngOnInit(): void {

    this.keyword = this._ActivatedRoute.snapshot.paramMap.get('word');//btc

    this.searchWord(this.keyword)

  }

  searchWord(word: string) {

    this._ArticlesService.getsearchAricles(this.keyword).subscribe((response) => {

      this.returnToSearch = response.response.docs
      console.log(this.returnToSearch)
    })
  }

}

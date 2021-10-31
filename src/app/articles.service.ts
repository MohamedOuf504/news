import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private _HttpClient: HttpClient) { }
  getallcontent() : Observable<any>
  {

   return  this._HttpClient.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=It77Bm50xCIrk26QogMiByHezZVP4Ee7`)
  }
  getSpecificAricles(category:string) : Observable<any>
  {

   return  this._HttpClient.get(`https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=It77Bm50xCIrk26QogMiByHezZVP4Ee7`)
  }

  getsearchAricles(category:string) : Observable<any>
  {

   return  this._HttpClient.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=It77Bm50xCIrk26QogMiByHezZVP4Ee7`)
  }


  getWorldNews(): Observable<any>
  {

   return  this._HttpClient.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=It77Bm50xCIrk26QogMiByHezZVP4Ee7`)
  }
}

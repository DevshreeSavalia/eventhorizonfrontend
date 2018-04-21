import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  url:string="http://localhost:3000/sea_route/";
  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }
  getSearch(id){
    return this.http.get(this.url+id);
  }

}

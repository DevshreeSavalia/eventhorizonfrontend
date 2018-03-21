import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchdataProvider {
  url:string="http://localhost:3000/cat_route/";
  constructor(public http: HttpClient) {
    console.log('Hello SearchdataProvider Provider');
  }
  getAllCategory(){
    return this.http.get(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PastSegDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PastSegDataProvider {
  url:string="http://localhost:3000/pastsgmt/1";
 
  constructor(public http: HttpClient) {
    console.log('Hello PastSegDataProvider Provider');
  }
  getPastSegment(){
    return this.http.get(this.url);
  }
}

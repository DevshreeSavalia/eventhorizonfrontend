import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpcomSegDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpcomSegDataProvider {
  url1:string="http://localhost:3000/upcomsegment/1";
  constructor(public http: HttpClient) {
    console.log('Hello UpcomSegDataProvider Provider');
  }
  getUpSegment(){
    return this.http.get(this.url1);
  }

}

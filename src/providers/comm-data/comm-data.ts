import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommDataProvider {
  url1:string="http://localhost:3000/com_id/";
  constructor(public http: HttpClient) {
    console.log('Hello CommDataProvider Provider');
  }
  getCommunityByIdd(id){
    return this.http.get(this.url1+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommWiseDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommWiseDataProvider {
 // url1:string="http://localhost:3000/comm_route/";
  url1:string="https://eventhorizon1.herokuapp.com/comm_route/";
  constructor(public http: HttpClient) {
    console.log('Hello CommWiseDataProvider Provider');
  }
  getCommunityById(id){
    return this.http.get(this.url1+id);
  }
}

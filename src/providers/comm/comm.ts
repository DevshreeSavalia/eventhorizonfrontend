import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommProvider Provider');
  }

  url1:string="http://localhost:3000/comm_route/";

   getCommunityById(id){
     return this.http.get(this.url1+id);
   }

}

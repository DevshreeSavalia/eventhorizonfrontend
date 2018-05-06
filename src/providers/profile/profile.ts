import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfileProvider Provider');
  }

  //url1:string="http://localhost:3000/pro_route/";
  url1:string="https://eventhorizon1.herokuapp.com/pro_route/";
   getProfile(id){
     return this.http.get(this.url1+id);
   }

}

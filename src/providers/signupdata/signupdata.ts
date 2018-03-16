import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SignupdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignupdataProvider {
  url:string="http://localhost:3000/user/";
  constructor(public http: HttpClient) {
    console.log('Hello SignupdataProvider Provider');
  }

  addUser(data){
    let body=JSON.stringify(data);
    console.log(body);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
}

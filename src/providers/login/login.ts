import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }
  url :string="http://localhost:3000/ulogin/";

  checkuser(user){
    let body=JSON.stringify(user);
   return  this.http.post(this.url,body,{headers:new HttpHeaders().set("Content-Type","application/json")});
  }
}

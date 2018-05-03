import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the UpdateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdateProvider {
  url:string="http://localhost:3000/user/";
  constructor(public http: HttpClient) {
    console.log('Hello UpdateProvider Provider');
  }
  updateUser(email,updt){
    let body=JSON.stringify(updt);
    console.log(body);
    return this.http.put(this.url+email,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
}

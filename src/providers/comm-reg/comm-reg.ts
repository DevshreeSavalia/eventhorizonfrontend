import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommRegProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommRegProvider {
  url:string="http://localhost:3000/comm_reg/";
  constructor(public http: HttpClient) {
    console.log('Hello CommRegProvider Provider');
  }
addReg(data){
  let body=JSON.stringify(data);
    console.log(body);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
}
}

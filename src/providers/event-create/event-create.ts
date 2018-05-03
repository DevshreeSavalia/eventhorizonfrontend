import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventCreateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventCreateProvider {
  url:string="http://localhost:3000/eve/";
  constructor(public http: HttpClient) {
    console.log('Hello EventCreateProvider Provider');
  }
  addEvent(fd: FormData){
    // let body=JSON.stringify(data);
    // return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
    return this.http.post(this.url, fd);
  }
}
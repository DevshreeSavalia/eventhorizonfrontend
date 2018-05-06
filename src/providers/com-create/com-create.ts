import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ComCreateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComCreateProvider {
 // url: string = "http://localhost:3000/comm_route/";
  url:string="https://eventhorizon1.herokuapp.com/comm_route/";
  constructor(public http: HttpClient) {
    console.log('Hello ComCreateProvider Provider');
  }

  addCommunity(fd: FormData) {
    // let body=JSON.stringify(data);
    // return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
    return this.http.post(this.url, fd);
  }
}

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MemberDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberDataProvider {
  url:string="http://localhost:3000/memsgmt/"
  constructor(public http: HttpClient) {
    console.log('Hello MemberDataProvider Provider');
  }
  getMembSegment(id){
    return this.http.get(this.url+id);
  }
}

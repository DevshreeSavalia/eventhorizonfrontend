import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PastSegIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PastSegIdProvider {
 // url:string="http://localhost:3000/past_seg_id/";
  url:string="https://eventhorizon1.herokuapp.com/past_seg_id/";
  constructor(public http: HttpClient) {
    console.log('Hello PastSegIdProvider Provider');
  }
  getUpPastById(id){
    return this.http.get(this.url+id);
  }

}

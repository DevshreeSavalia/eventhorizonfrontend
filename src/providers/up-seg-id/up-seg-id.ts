import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpSegIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpSegIdProvider {
  //url:string="http://localhost:3000/up_seg_id/";
  url:string="https://eventhorizon1.herokuapp.com/up_seg_id/";
  constructor(public http: HttpClient) {
    console.log('Hello UpSegIdProvider Provider');
  }
  getUpSegmentById(id){
    return this.http.get(this.url+id);
  }

}

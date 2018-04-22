import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EvtRegProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EvtRegProvider {
  url:string="http://localhost:3000/event_reg/";
  constructor(public http: HttpClient) {
    console.log('Hello EvtRegProvider Provider');
  }
  evtReg(data){
    let body=JSON.stringify(data);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }

}

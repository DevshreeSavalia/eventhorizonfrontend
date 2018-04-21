import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FeedbackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedbackProvider {
  url:string="http://localhost:3000/feedback/";
  constructor(public http: HttpClient) {
    console.log('Hello FeedbackProvider Provider');
  }
  addFeedback(data){
    let body=JSON.stringify(data);
    console.log(body);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  getFeedbackById(id){
    return this.http.get(this.url+id);
  }
 
}



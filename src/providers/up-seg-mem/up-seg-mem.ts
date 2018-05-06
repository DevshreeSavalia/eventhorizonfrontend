import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpSegMemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpSegMemProvider {
 // url:string="http://localhost:3000/up_mem/";
  url:string="https://eventhorizon1.herokuapp.com/up_mem/";
  constructor(public http: HttpClient) {
    console.log('Hello UpSegMemProvider Provider');
  }
  getUpMemb(id){
    return this.http.get(this.url+id);
  }
}

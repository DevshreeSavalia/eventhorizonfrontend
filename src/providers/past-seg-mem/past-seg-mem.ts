import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PastSegMemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PastSegMemProvider {
  //url:string="http://localhost:3000/pas_mem/";
  url:string="https://eventhorizon1.herokuapp.com/pas_mem/";
  constructor(public http: HttpClient) {
    console.log('Hello PastSegMemProvider Provider');
  }
  getPastMemb(id){
    return this.http.get(this.url+id);
  }

}

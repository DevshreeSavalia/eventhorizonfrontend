import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpcommSegDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpcommSegDataProvider {
  //url:string="http://localhost:3000/upcompage/";
  url:string="https://eventhorizon1.herokuapp.com/upcompage/";
  constructor(public http: HttpClient) {
    console.log('Hello UpcommSegDataProvider Provider');
  }
  getUpPage(id){
    return this.http.get(this.url+id);
  }

}

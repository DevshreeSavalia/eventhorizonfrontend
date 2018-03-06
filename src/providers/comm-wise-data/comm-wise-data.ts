import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommWiseDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommWiseDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommWiseDataProvider Provider');
  }

}

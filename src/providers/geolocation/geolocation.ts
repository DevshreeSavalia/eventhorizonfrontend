import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationProvider {
  url:string="https://maps.googleapis.com/maps/api/geocode/json?address=";
  
  constructor(public http: HttpClient) {
    console.log('Hello GeolocationProvider Provider');
  }
  getCurrentPosition(address:string){
    console.log(this.url+address+"&key=AIzaSyCOT-IW9-43QEMmHrheojSCt4Zr64HrnS4");
    return this.http.get(this.url+address+"&key=AIzaSyCOT-IW9-43QEMmHrheojSCt4Zr64HrnS4");
 }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { search_dt } from './search_class';
import { SearchdataProvider } from '../../providers/searchdata/searchdata';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SearchNavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-navigate',
  templateUrl: 'search-navigate.html',
})
export class SearchNavigatePage {
  arr:search_dt[]=[];
  id:string;
  constructor(public _search: SearchdataProvider,public navCtrl: NavController, public navParams: NavParams)
 {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchNavigatePage');
    this.id=this.navParams.get('id');
    console.log(this.id);
    this._search.getCommunity(this.id).subscribe(
      (dataa:search_dt[])=>{
         this.arr=dataa;
         console.log(this.arr);
      }
    );
  }
  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}

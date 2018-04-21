import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { search_dt } from './search_class';
import { SearchProvider } from '../../providers/search/search';
import { LoginPage } from '../login/login';
import { CommNamePage } from "../comm-name/comm-name";
import { CommDataProvider } from '../../providers/comm-data/comm-data';

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
  arr: search_dt[] = [];
  id: string;
  email: string;
  constructor(public _comm_data: CommDataProvider,
    public _search: SearchProvider, public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchNavigatePage');
    this.id = this.navParams.get('id');
    this.email = localStorage.getItem("user_name");
    console.log(this.id);
    this._search.getSearch(this.id).subscribe(
      (dt: search_dt[]) => {
        this.arr = dt;
        console.log(this.arr);
      }
    );
  }
  com_page(id: number) {
    this.navCtrl.push(CommNamePage, {
      id: id
    });
  }
  logout() {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}

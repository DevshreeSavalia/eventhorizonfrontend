import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SearchdataProvider } from "../../providers/searchdata/searchdata";
import { search } from "./search_class";
import {LoginPage} from '../login/login';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  ar: search[] = [];
  item:search[]=[];
  constructor(
    public _search: SearchdataProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
    this._search.getAllCategory().subscribe(
      (item:search[])=>{
        this.ar=item;
        this.item=this.ar;
      }
    );
  
  }
  initial(){
    this.item=this.ar;
  }
  getItems(ev){
    this.initial();
    let data = ev.target.value;

    if(data && data.trim() != ''){
      this.item = this.ar.filter((dataa)=>
      {
        return(dataa.c_name.toLowerCase().indexOf(data.toLowerCase())>-1);
      }
    )
    }
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}

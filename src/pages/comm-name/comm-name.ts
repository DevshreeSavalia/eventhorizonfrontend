import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PastevtPage } from '../pastevt/pastevt';
import { UpSegPage } from '../up-seg/up-seg';
import { comm_class } from './comm_class_id';
import { CommDataProvider } from '../../providers/comm-data/comm-data';
import { MemberPage } from '../member/member';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CommNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comm-name',
  templateUrl: 'comm-name.html',
})
export class CommNamePage {
  arr:comm_class[]=[];
  id:string;
  comm_desc:string;
  constructor(public _comm_data:CommDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommNamePage');
    this.id=this.navParams.get('id');
    console.log(this.id);
    this._comm_data.getCommunityByIdd(this.id).subscribe(
      (dataa:comm_class[])=>{
         this.arr=dataa;
         console.log(this.arr);
      }
    );
  }

  up(id:number){
    this.navCtrl.push(UpSegPage,{id:id});
  }

  past(cid:number){
    this.navCtrl.push(PastevtPage,{id:cid});
  }

  member(mid:number){
    this.navCtrl.push(MemberPage,{id:mid});
  }
  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}

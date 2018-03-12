import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PastevtPage } from '../pastevt/pastevt';
import { UpSegPage } from '../up-seg/up-seg';
import { comm_class } from './comm_class_id';
import { CommDataProvider } from '../../providers/comm-data/comm-data';

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
  email_id_fk:string;
  constructor(public _comm_data:CommDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommNamePage');
    this.id=this.navParams.get('id');
    console.log(this.id);
    this._comm_data.getCommunityByIdd(this.id).subscribe(
      (dataa:comm_class[])=>{
          // this.comm_desc=dataa[0].comm_desc;
          // this.email_id_fk=dataa[0].email_id_fk;
         this.arr=dataa;
      }
    );
  }

  up(){
    this.navCtrl.push(UpSegPage);
  }

  past(){
    this.navCtrl.push(PastevtPage);
  }
}

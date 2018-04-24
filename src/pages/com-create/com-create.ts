import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { comm_class } from '../mycommunities/comm_class';
import { ComCreateProvider } from '../../providers/com-create/com-create';

/**
 * Generated class for the ComCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com-create',
  templateUrl: 'com-create.html',
})
export class ComCreatePage {
  crte: comm_class[] = [];
  cm_create: comm_class;
  com_id: string;
  com_nm: string;
  cat_id: string;
  com_desc: string;
  img: string;
  u_email: string;
  selectedFile: File = null;
  constructor(public com_create: ComCreateProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComCreatePage');
    this.u_email = localStorage.getItem("user_email");
    console.log("email:" + this.u_email);
  }
  processWebImage(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }
  create() {
    //this.cm_create = new comm_class((+this.com_id), this.com_nm, (+this.cat_id), this.com_desc, this.img, this.u_email);
    console.log('inside create');
    const fd = new FormData();
    fd.append("comm_id", this.com_id);
    fd.append("comm_name", this.com_nm);
    fd.append("c_id_fk", this.cat_id);
    fd.append("comm_desc", this.com_desc);
    fd.append("image", this.selectedFile, this.selectedFile.name);
    fd.append("email_id_fk", this.u_email);

    this.com_create.addCommunity(fd).subscribe(
      (dt: any) => {
        console.log(dt);
        alert("created!!");
      }
    );

  }

  logout() {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}

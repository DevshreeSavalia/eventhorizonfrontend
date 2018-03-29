import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { upcomm_class } from "./upcom_class";
import { UpcommSegDataProvider } from "../../providers/upcomm-page-data/upcomm-page-data";
import { LoginPage } from '../login/login';

/**
 * Generated class for the UpcomingevtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-upcomingevt",
  templateUrl: "upcomingevt.html"
})
export class UpcomingevtPage {
  ar: upcomm_class[] = [];
  email_id: string;
  constructor(
    public _upseg_data: UpcommSegDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpcomingevtPage");
    this.email_id = localStorage.getItem("user_email");
    console.log(this.email_id);
    this._upseg_data
      .getUpPage(this.email_id)
      .subscribe((data: upcomm_class[]) => {
        this.ar = data;
      });
  }
  logout() {
    this.navCtrl.parent.parent.setRoot(LoginPage);    
  }
}

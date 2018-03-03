import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LoginProvider } from "../../providers/login/login";
import { user_login } from "./user_login";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email_id: string = "";
  password: string = "";
  tmp:user_login[]=[];
  constructor(
    public _data: LoginProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  login1() {
    this._data
      .checkuser(new user_login(this.email_id, this.password))
      .subscribe((data:user_login[])=>{
        this.tmp=data;
        if(this.tmp.length==1)
        {
          console.log("valid");
          localStorage.setItem('user_email',this.email_id);
        }
        else
        {
          console.log("invalid");
        }
      }
    );
  }
}

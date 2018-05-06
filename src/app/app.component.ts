import {Component, ViewChild} from '@angular/core';
import {Nav, Platform,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
//import { TabsPage } from '../pages/tabs/tabs';
import {UpcomingevtPage  } from '../pages/upcomingevt/upcomingevt';
import { MycommunitiesPage } from '../pages/mycommunities/mycommunities';
import {SearchPage } from '../pages/search/search';
import {ComCreatePage  } from '../pages/com-create/com-create';
import {EventCreatePage } from '../pages/event-create/event-create';
import {ProfilePage} from '../pages/profile/profile';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  upcoming()
  {
   this.nav.push(UpcomingevtPage);
  }
  mycomm(){
    this.nav.push(MycommunitiesPage);
  }
  profile(){
    this.nav.push(ProfilePage);
  }
  search(){
    this.nav.push(SearchPage);
  }
  createcomm(){
    this.nav.push(ComCreatePage);
  }
  createeve(){
    this.nav.push(EventCreatePage);
  }

  
}

  

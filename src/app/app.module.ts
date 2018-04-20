import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CommNamePage } from '../pages/comm-name/comm-name';
import { UpcomingevtPage } from '../pages/upcomingevt/upcomingevt';
import { PastevtPage } from '../pages/pastevt/pastevt';
import { MemberPage} from '../pages/member/member';
import { LoginPage } from '../pages/login/login';
import { UpSegPage } from '../pages/up-seg/up-seg';
import { MycommunitiesPage} from '../pages/mycommunities/mycommunities';
import { SignupPage } from '../pages/signup/signup';
import { UpdatePage } from '../pages/update/update';
import { SearchPage } from '../pages/search/search';
import { SearchNavigatePage } from '../pages/search-navigate/search-navigate';
import {ProfilePage} from '../pages/profile/profile';
//import { ComCreatePage } from '../pages/com-create/com-create';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { UpcommSegDataProvider } from '../providers/upcomm-page-data/upcomm-page-data';
import { CommWiseDataProvider } from '../providers/comm-wise-data/comm-wise-data';
import { MemberDataProvider } from '../providers/member-seg-data/member-seg-data';
import { PastSegDataProvider } from '../providers/past-seg-data/past-seg-data';
import { UpcomSegDataProvider } from '../providers/upcom-seg-data/upcom-seg-data';
import { CommProvider } from '../providers/comm/comm';
import { CommDataProvider } from '../providers/comm-data/comm-data';
import { SignupdataProvider } from '../providers/signupdata/signupdata';
import { UpdateProvider } from '../providers/update/update';
import { SearchdataProvider } from '../providers/searchdata/searchdata';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import {ProfileProvider} from '../providers/profile/profile';
//import { ComCreateProvider } from '../providers/com-create/com-create';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CommNamePage,
    UpcomingevtPage,
    PastevtPage,
    MemberPage,
    LoginPage,
    UpSegPage,
    MycommunitiesPage,
    SignupPage,
    UpdatePage,
    SearchPage,
    SearchNavigatePage,
    ProfilePage
    //ComCreatePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CommNamePage,
    UpcomingevtPage,
    PastevtPage,
    MemberPage,
    LoginPage,
    UpSegPage,
    MycommunitiesPage,
    SignupPage,
    UpdatePage,
    SearchPage,
    SearchNavigatePage,
    ProfilePage
    //ComCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GeolocationProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    UpcommSegDataProvider,
    CommWiseDataProvider,
    MemberDataProvider,
    UpcomSegDataProvider,
    PastSegDataProvider,
    CommProvider,
    CommDataProvider,
    SignupdataProvider,
    UpdateProvider,
    SearchdataProvider,
    ProfileProvider
    //ComCreateProvider
  ]
})
export class AppModule {}
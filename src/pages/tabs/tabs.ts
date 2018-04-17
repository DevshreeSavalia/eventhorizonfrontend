import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
// import { CommNamePage } from '../comm-name/comm-name';
import { UpcomingevtPage } from '../upcomingevt/upcomingevt';
import { MycommunitiesPage} from '../mycommunities/mycommunities';
import { SearchPage } from '../search/search';
<<<<<<< HEAD
import { ComCreatePage } from '../com-create/com-create';
import { UpdatePage } from '../update/update';
=======
import {ProfilePage} from '../profile/profile';
>>>>>>> e406d155f8977ff4d6eddec36eb47828d7e33f5b

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
<<<<<<< HEAD
  tab2Root= UpcomingevtPage;
  tab3Root =  MycommunitiesPage;
  tab4Root = ComCreatePage;
  tab5Root = UpdatePage;
=======
  tab3Root= UpcomingevtPage;
  tab4Root =  MycommunitiesPage;
  tab5Root = ProfilePage;
>>>>>>> e406d155f8977ff4d6eddec36eb47828d7e33f5b
  constructor() {

  }
}

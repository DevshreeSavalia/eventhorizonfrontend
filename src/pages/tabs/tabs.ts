import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
// import { CommNamePage } from '../comm-name/comm-name';
import { UpcomingevtPage } from '../upcomingevt/upcomingevt';
import { MycommunitiesPage} from '../mycommunities/mycommunities';
import { SearchPage } from '../search/search';
import { ComCreatePage } from '../com-create/com-create';
import { EventCreatePage } from '../event-create/event-create';
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root= UpcomingevtPage;
  tab3Root =  MycommunitiesPage;
  tab4Root = ComCreatePage;
  tab5Root =  EventCreatePage;
  tab6Root = ProfilePage;
  constructor() {

  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchNavigatePage } from './search-navigate';

@NgModule({
  declarations: [
    SearchNavigatePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchNavigatePage),
  ],
})
export class SearchNavigatePageModule {}

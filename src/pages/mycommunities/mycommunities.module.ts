import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycommunitiesPage } from './mycommunities';

@NgModule({
  declarations: [
    MycommunitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MycommunitiesPage),
  ],
})
export class MycommunitiesPageModule {}

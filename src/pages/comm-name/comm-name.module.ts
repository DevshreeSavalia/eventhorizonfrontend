import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommNamePage } from './comm-name';

@NgModule({
  declarations: [
    CommNamePage,
  ],
  imports: [
    IonicPageModule.forChild(CommNamePage),
  ],
})
export class CommNamePageModule {}

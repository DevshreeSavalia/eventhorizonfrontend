import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastevtPage } from './pastevt';

@NgModule({
  declarations: [
    PastevtPage,
  ],
  imports: [
    IonicPageModule.forChild(PastevtPage),
  ],
})
export class PastevtPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Kuliner } from './kuliner';

@NgModule({
  declarations: [
    Kuliner,
  ],
  imports: [
    IonicPageModule.forChild(Kuliner),
  ],
  exports: [
    Kuliner
  ]
})
export class KulinerModule {}

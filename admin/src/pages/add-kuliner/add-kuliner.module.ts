import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddKuliner } from './add-kuliner';

@NgModule({
  declarations: [
    AddKuliner,
  ],
  imports: [
    IonicPageModule.forChild(AddKuliner),
  ],
  exports: [
    AddKuliner
  ]
})
export class AddKulinerModule {}

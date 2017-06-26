import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAngkot } from './add-angkot';

@NgModule({
  declarations: [
    AddAngkot,
  ],
  imports: [
    IonicPageModule.forChild(AddAngkot),
  ],
  exports: [
    AddAngkot
  ]
})
export class AddAngkotModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Angkot } from './angkot';

@NgModule({
  declarations: [
    Angkot,
  ],
  imports: [
    IonicPageModule.forChild(Angkot),
  ],
  exports: [
    Angkot
  ]
})
export class AngkotModule {}

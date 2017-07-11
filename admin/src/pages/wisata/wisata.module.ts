import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Wisata } from './wisata';

@NgModule({
  declarations: [
    Wisata,
  ],
  imports: [
    IonicPageModule.forChild(Wisata),
  ],
  exports: [
    Wisata
  ]
})
export class WisataModule {}

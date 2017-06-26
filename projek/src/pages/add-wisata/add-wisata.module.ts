import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWisata } from './add-wisata';

@NgModule({
  declarations: [
    AddWisata,
  ],
  imports: [
    IonicPageModule.forChild(AddWisata),
  ],
  exports: [
    AddWisata
  ]
})
export class AddWisataModule {}

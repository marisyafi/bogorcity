import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHotel } from './add-hotel';

@NgModule({
  declarations: [
    AddHotel,
  ],
  imports: [
    IonicPageModule.forChild(AddHotel),
  ],
  exports: [
    AddHotel
  ]
})
export class AddHotelModule {}

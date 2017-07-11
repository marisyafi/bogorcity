import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hotel } from './hotel';

@NgModule({
  declarations: [
    Hotel,
  ],
  imports: [
    IonicPageModule.forChild(Hotel),
  ],
  exports: [
    Hotel
  ]
})
export class HotelModule {}

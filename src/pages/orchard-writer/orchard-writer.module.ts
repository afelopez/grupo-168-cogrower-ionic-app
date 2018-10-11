import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrchardWriterPage } from './orchard-writer';

@NgModule({
  declarations: [
    OrchardWriterPage,
  ],
  imports: [
    IonicPageModule.forChild(OrchardWriterPage),
  ],
})
export class OrchardWriterPageModule {}

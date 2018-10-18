import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrchardWriterPage } from '../orchard-writer/orchard-writer';
import { GalleryPage} from '../gallery/gallery';


@Component({
  selector: 'page-orchard-details',
  templateUrl: 'orchard-details.html'
})
export class OrchardDetailsPage {
  selectedOrchard: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedOrchard = navParams.get('orchard');
  }
  editOrchard(event, orchard) {
    this.navCtrl.push(OrchardWriterPage, {
      orchard: orchard});
  }
  galleryOrchard(event,orchard){
    this.navCtrl.push(GalleryPage)};
  }

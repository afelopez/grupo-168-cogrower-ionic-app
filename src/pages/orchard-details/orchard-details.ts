import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { OrchardWriterPage } from '../orchard-writer/orchard-writer';
import { GalleryPage} from '../gallery/gallery';


@Component({
  selector: 'page-orchard-details',
  templateUrl: 'orchard-details.html'
})
export class OrchardDetailsPage {
  selectedOrchard: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ){
    this.selectedOrchard = navParams.get('orchard');
  }
  editOrchard(event, orchard) {
    this.navCtrl.push(OrchardWriterPage, {
      orchard: orchard});
  }
  galleryOrchard(event,orchard){
    this.navCtrl.push(GalleryPage)};
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
    }

}

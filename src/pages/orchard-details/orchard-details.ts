import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrchardWriterPage } from '../orchard-writer/orchard-writer';


@Component({
  selector: 'page-orchard-details',
  templateUrl: 'orchard-details.html'
})
export class OrchardDetailsPage {OrchardDetailsPage
  selectedOrchard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedOrchard = navParams.get('orchard');
  }
  editOrchard(event, orchard) {
    this.navCtrl.push(OrchardWriterPage, {
      orchard: orchard
    });
  }
}

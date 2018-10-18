import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrchardDetailsPage } from '../orchard-details/orchard-details';
// import { Orchard } from '../../app/orchard';
import { ORCHARDS } from '../../app/mock-orchards'

@Component({
  selector: 'page-orchard',
  templateUrl: 'orchard.html'
})
export class OrchardsPage {
  icons: string[];
  orchards: Array<{name: string, description: string, image: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // agrego variable la puedo llamar en el html del componente
    // crea la estancia de la clase Hero para el FOR
    this.orchards = ORCHARDS;
  }

  orchardTapped(event, orchard) {
    this.navCtrl.push(OrchardDetailsPage, {
      orchard: orchard
    });
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { USER } from '../../app/mock-user';

@Component({
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: Array<{name: string, lastname: string, profileimg: string, email: string, birthday: date}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // agrego variable la puedo llamar en el html del componente
    // crea la estancia de la clase Hero para el FOR
    this.user = USER;
  }

  /*orchardTapped(event, orchard) {
    this.navCtrl.push(OrchardDetailsPage, {
      orchard: orchard
    });
  }*/
	dismiss() {
		this.navCtrl.dismiss();
	}
}

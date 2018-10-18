/*import { Component } from '@angular/core';
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
  }
	dismiss() {
		this.navCtrl.dismiss();
	}
}
*/

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Auth, FacebookAuth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-user-page',
  templateUrl: 'profile.html',
})
export class UserPage {

  public username;
  public photo;

  constructor(public navCtrl: NavController, public auth: Auth, public facebookAuth: FacebookAuth, public user: User, public platform: Platform) {

    if(this.user.details.hasOwnProperty('email')){
      this.username = this.user.details.email;
      this.photo = this.user.details.image;
    }else{
      this.username = this.user.social.facebook.data.full_name;
      this.photo = this.user.social.facebook.data.profile_picture;
    }

    this.platform.registerBackButtonAction(() => {
      this.logoutUser.call(this);
    }, 1);

  }

  logoutUser() {

    if (this.auth.isAuthenticated()) {
      if(this.user.details.hasOwnProperty('email')){
        this.auth.logout();
      }else{
        this.facebookAuth.logout();
      }
    }

    this.navCtrl.pop();
  }

  logout() {
    this.logoutUser.call(this);
  }

}
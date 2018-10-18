/*import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { SignupPage } from '../sign-up/sign-up';

@Component({
  templateUrl: 'sign-in.html'
})
export class SigninPage { 
	loading: Loading;
	registerCredentials = { email: '', password: '' };
	
	constructor(private navCtrl: NavController){}
		createAccount(event, signup) {
			this.navCtrl.push(SignupPage, {
				signup: signup
			});
		}
  
}
*/
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, FacebookAuth, User, UserDetails } from '@ionic/cloud-angular';
import { SignupPage } from '../sign-up/sign-up';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'sign-in.html'
})
export class HomePage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public auth: Auth, public facebookAuth: FacebookAuth, public user: User, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    if (this.auth.isAuthenticated()) {
      this.navCtrl.push(ProfilePage);
    }
  }


  login(type) {

    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 5000);

    if(type == 'fb'){
      this.facebookAuth.login().then((res) => {

        loader.dismiss();
        this.navCtrl.push(ProfilePage);

      }, (err) => {

        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: "Error while logging in to Facebook.",
          subTitle: 'Please try again.',
          buttons: ['OK']
        });
        alert.present();

      });
    }else{

      let details: UserDetails = {
        'email': this.email,
        'password': this.password
      };

      this.auth.login('basic', details).then((res) => {

        loader.dismiss();
        this.email = '';
        this.password = '';
        this.navCtrl.push(ProfilePage);

      }, (err) => {

        loader.dismiss();
        this.email = '';
        this.password = '';
        let alert = this.alertCtrl.create({
          title: "Invalid Credentials.",
          subTitle: 'Please try again.',
          buttons: ['OK']
        });
        alert.present();

      });

    }

  }

  signup() {
    this.email = '';
    this.password = '';
    this.navCtrl.push(SignupPage);
  }

}
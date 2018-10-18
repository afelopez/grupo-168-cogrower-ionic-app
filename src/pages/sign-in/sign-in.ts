import { Component } from '@angular/core';
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
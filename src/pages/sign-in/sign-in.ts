import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'sign-in.html'
})
export class SigninPage { 
	registerCredentials = { email: '', password: '' };
	
	constructor(private navCtrl: NavController){}
		public createAccount() {
			this.navCtrl.push('SignupPage');
		}
}
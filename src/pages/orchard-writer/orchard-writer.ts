import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Orchard } from "../../app/orchard";

@IonicPage()
@Component({
  selector: 'page-orchard-writer',
  templateUrl: 'orchard-writer.html',
})
export class OrchardWriterPage {
  @Input() selectedOrchard: Orchard;
  // selectedOrchard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedOrchard = navParams.get('orchard');
  }
  goBack(){
    this.navCtrl.pop();
  }
}

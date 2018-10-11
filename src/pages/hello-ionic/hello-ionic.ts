import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation) {
  }

  ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
        console.log(geoposition);
      })
  }

}

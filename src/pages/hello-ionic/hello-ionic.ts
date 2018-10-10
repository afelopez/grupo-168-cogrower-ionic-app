import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(private _googleMaps: GoogleMaps,
              private _geoLoc: Geolocation) {

  }

  ngAfterViewInit(){
    this.initMap();
    this.getLocation().then( res => {
      console.log(res.coords.latitude)
      console.log(res.coords.longitude)
    }).catch(err =>{
      console.log(err);
    })
  }

  initMap(){
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)
  }

  geoLocation(){
    return this._geoLoc.getCurrentPosition();
  }

}
